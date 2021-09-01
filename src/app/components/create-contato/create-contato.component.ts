import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contatos.service';


@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.novoContato.telefones = [...this.novoContato.telefones, ""];
  }

  rmTelefone(i:number){
    this.novoContato.telefones.splice(i,1);
  }

  track(index:number, item:string){
    return index;
  }

  salvar(){
    this.contatoService.addContato(this.novoContato);
    this.emissor.emit()
  }

  ngOnChanges(){
    console.log("teste")
  }

  ngOnInit(): void {
  }

}
