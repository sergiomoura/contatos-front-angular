import { EventEmitter, Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private static chave:string = "CONTATOS";
  
  public static contatosMudaram:EventEmitter<Contato[]> = new EventEmitter();

  constructor() {}

  public static getContatos():Contato[] {
    let dados:string|null = window.localStorage.getItem(ContatoService.chave);
    let contatos:Contato[];
    if(dados){
      contatos = JSON.parse(dados);
    } else {
      contatos = [];
      window.localStorage.setItem(ContatoService.chave, "[]");
    }
    return contatos;    
  }

  public static addContato(c:Contato):void {
    let contatos = this.getContatos();
    contatos.push(c);
    window.localStorage.setItem(ContatoService.chave,JSON.stringify(contatos));
    ContatoService.contatosMudaram.emit(contatos);
  }

  
  
}
