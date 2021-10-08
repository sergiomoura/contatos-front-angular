import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

interface Response {
  msg:string,
  token:string
} 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = "http://contatos-nodb.herokuapp.com";

  constructor(private http:HttpClient) { }

  cadastrar(nome:string, email:string, senha:string):Observable<Response>{
    return <Observable<Response>>this.http.post(`${this.url}/registrar`,{nome, email, senha}).pipe(
      map(
        data => {
          window.sessionStorage.setItem("token",(<Response>data).token)
          return <Response>data;
        }
      )
    )
  }

  login(email:string, senha: string):Observable<Response>{
    return <Observable<Response>>this.http.post(`${this.url}/login`, {email,senha}).pipe(
      map(data => {
        window.sessionStorage.setItem("token",(<Response>data).token)
        return <Response>data;
      })
    )
  }

  logout(){
    window.sessionStorage.removeItem('token');
  }

  isLogged():boolean{
    return window.sessionStorage.getItem('token') != null;
  }
}
