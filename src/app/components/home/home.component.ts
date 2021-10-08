import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contatos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  mostrandoCreateContato = false;
  contatoNoModal!: Contato;

  constructor() {
    ContatoService.editarContatoClicado.subscribe(
      contato => {
        this.mostrarModal(contato);
        console.log(contato);
      }

    )
  }

  mostrarModal(contato: Contato = { nome: "", email: "", telefones: [""] }) {
    this.contatoNoModal = contato;
    this.mostrandoCreateContato = true;
  }

  esconderModal() {
    this.mostrandoCreateContato = false;
  }

  ngOnInit(): void {
  }

}
