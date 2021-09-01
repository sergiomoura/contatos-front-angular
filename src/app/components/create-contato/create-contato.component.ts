import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();
  
  novoContato:Contato = {
    nome:"",
    email:"",
    telefones:[""]
  }

  constructor() { }

  cancelar(){
    console.log("Pediu para candelar");
    this.onCancelarClick.emit()
  }

  track(index:number, value:string){
    return index;
  }

  ngOnInit(): void {
  }

  addTelefone():void{
    this.novoContato.telefones.push("");
  }

}
