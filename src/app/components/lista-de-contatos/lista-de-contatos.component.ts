import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contatos.service';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos:Contato[] = [];

  constructor() {
    this.contatos = ContatoService.getContatos();
    ContatoService.contatosMudaram.subscribe(
      contatos => {this.contatos = contatos}
    )
  } 

  ngOnInit(): void {
  }

  mostrarModal() {
    ContatoService.editContato({nome:"",email:"",telefones:[""]});
  }

}
