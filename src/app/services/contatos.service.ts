import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos:Contato[] = [
    {
      nome:"Contato 1",
      email:"contato1@teste.com",
      telefones:['1111111111']
    },
    {
      nome:"Contato 2",
      email:"contato2@teste.com",
      telefones:['2222222222','484888844','455888977']
    },
    {
      nome:"Contato 3",
      email:"contato3@teste.com",
      telefones:['3333333333']
    },
    {
      nome:"Contato 4",
      email:"contato4@teste.com",
      telefones:['4444444444']
    },
    {
      nome:"Contato 5",
      email:"contato5@teste.com",
      telefones:['5555555555']
    },
    {
      nome:"Contato 6",
      email:"contato6@teste.com",
      telefones:['6666666666']
    },
    {
      nome:"Contato 7",
      email:"contato7@teste.com",
      telefones:['7777777777']
    },
    {
      nome:"Contato 8",
      email:"contato8@teste.com",
      telefones:['8888888888']
    },
    {
      nome:"Contato 9",
      email:"contato9@teste.com",
      telefones:['999999999']
    },
    {
      nome:"Contato 10",
      email:"contato10@teste.com",
      telefones:['1010101010']
    },
  ];

  getContatos():Contato[] {
    return this.contatos;    
  }

  addContato(c:Contato):void {
    this.contatos.push(c);
  }

  constructor() { }
}
