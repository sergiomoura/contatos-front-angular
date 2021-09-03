import { EventEmitter, Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly chave:string = "CONTATOS";

  static onContatosMudaram:EventEmitter<Contato[]> = new EventEmitter();

  constructor() { }
  getContatos():Contato[] {
    
    // *Tentar* carregar os dados da localStorage
    let dados = window.localStorage.getItem(this.chave);

    // Verificar se havia dados na localStorage
    if(dados){

      // Se houver dados => {Transformar dados em array; Retornar os array de contatos}
      let contatosCarregados:Contato[] = JSON.parse(dados);
      return contatosCarregados;

    } else {
      
      // Se não houver dados => {Guardo uma array vazia no localstorage; Retorna o array vazia; }
      window.localStorage.setItem(this.chave, "[]");
      return [];

    }
    

  }

  addContato(c:Contato): void {
    
    // Levantar os contatos do localStorage para um array de contatos
    let contatos = this.getContatos();
    
    // Adicionar o contato c ao final do array
    contatos.push(c);

    // Salvar o array de volta no localStorage
    window.localStorage.setItem(this.chave,JSON.stringify(contatos));

    // Emitindo evento "contatos mudaram"
    ContatoService.onContatosMudaram.emit(contatos);

  }

}
