import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contatos.service';


@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() emissor:EventEmitter<null> = new EventEmitter();

  novoContato:Contato = {
    nome:"",
    email:"",
    telefones:[""]
  }

  constructor(private contatoService:ContatoService) {
    
  }

  meEsconda(){
    this.emissor.emit();
  }

  addTelefone(){
    this.novoContato.telefones.push("");
  }

  rmTelefone(i:number){
    this.novoContato.telefones.splice(i,1);
  }

  track(index:number, item:string){
    return index;
  }

  salvar(){
    ContatoService.addContato(this.novoContato);
    this.emissor.emit()
  }

  ngOnChanges(){
    console.log("teste")
  }

  ngOnInit(): void {
  }

}
