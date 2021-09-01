import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();

  constructor() { }

  cancelar(){
    console.log("Pediu para candelar");
    this.onCancelarClick.emit()
  }

  ngOnInit(): void {
  }

}
