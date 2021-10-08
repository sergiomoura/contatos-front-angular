import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = "http://contatos-nodb.herokuapp.com";

  constructor(private http:HttpClient) { }

  cadastrar(nome:string, email:string, senha:string):Observable<{msg:string,token:string}>{
    return <Observable<{msg:string,token:string}>>this.http.post(`${this.url}/registrar`,{nome, email, senha})
  }
}
