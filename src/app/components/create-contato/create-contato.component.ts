import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() emissor:EventEmitter<null> = new EventEmitter();

  constructor() { }

  meEsconda(){
    this.emissor.emit();
  }

  ngOnInit(): void {
  }

}
