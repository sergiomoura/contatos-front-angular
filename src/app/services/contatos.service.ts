import { EventEmitter, Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private static chave:string = "CONTATOS";
  
  public static contatosMudaram:EventEmitter<Contato[]> = new EventEmitter();
  public static editarContatoClicado:EventEmitter<Contato> = new EventEmitter();

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
    if(contatos.length == 0){
      c.id = 1;
    } else {
      c.id = contatos[contatos.length - 1].id! + 1;
    }
    contatos.push(c);
    ContatoService.contatosMudaram.emit(contatos);
    window.localStorage.setItem(ContatoService.chave,JSON.stringify(contatos));
  }

  public static updateContato(c:Contato){
    let contatos = this.getContatos();
    let posicao = contatos.findIndex( contato => c.id == contato.id );
    contatos[posicao] = c;
    ContatoService.contatosMudaram.emit(contatos);
    window.localStorage.setItem(ContatoService.chave,JSON.stringify(contatos));
  }

  public static rmContato(id:number){
    let contatos = this.getContatos();
    let posicao = contatos.findIndex( contato => contato.id == id );
    contatos.splice(posicao, 1);
    ContatoService.contatosMudaram.emit(contatos);
    window.localStorage.setItem(ContatoService.chave,JSON.stringify(contatos));
  }

  public static editContato(c:Contato){
    this.editarContatoClicado.emit(c);
  }
  
  
}
