import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { EventHubService } from './event-hub.service';
import { URL, LOCAL_STORAGE_KEY } from "../AppSettings";

interface Response {
  msg:string,
  token:string
} 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  cadastrar(nome:string, email:string, senha:string):Observable<Response>{
    return <Observable<Response>>this.http.post(`${URL}/registrar`,{nome, email, senha}).pipe(
      map(
        data => {
          window.sessionStorage.setItem(LOCAL_STORAGE_KEY,(<Response>data).token)
          return <Response>data;
        }
      )
    )
  }

  login(email:string, senha: string){

    EventHubService.carregamentoIniciado.emit("login");
    
    let observable = this.http.post(`${URL}/login`, {email,senha});
    
    observable = observable.pipe(
      map(data => {
        EventHubService.carregamentoFinalizado.emit("login");
        window.sessionStorage.setItem(LOCAL_STORAGE_KEY,(<Response>data).token);
        return data;
      }),
      catchError(
        err => {
          EventHubService.carregamentoFinalizado.emit("login");
          return throwError(err);
        }
      )
    )

    return observable;
  
  }

  logout(){
    window.sessionStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  isLogged():boolean{
    return window.sessionStorage.getItem(LOCAL_STORAGE_KEY) != null;
  }
}
