import { Component, Input, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contatos.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  @Input()
  contato!: Contato;

  constructor() { }

  onEditarClick(){
    ContatoService.editContato(this.contato);
  }

  ngOnInit(): void {
  }

}
