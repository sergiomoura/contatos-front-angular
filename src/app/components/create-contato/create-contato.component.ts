import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contatos.service';


@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Input('contato') _novoContato!:Contato;
  @Output() emissor:EventEmitter<null> = new EventEmitter();

  constructor() {}

  set novoContato(c:Contato){
    this._novoContato = c;
  }

  get novoContato():Contato{
    return this._novoContato;
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
    if(this.novoContato.id){
      ContatoService.updateContato(this.novoContato);
    } else {
      ContatoService.addContato(this.novoContato);
    }
    this.emissor.emit()
  }

  remover(){
    if(window.confirm("Tem certeza que deseja remover o contato?")){
      ContatoService.rmContato(this.novoContato.id!);
      this.emissor.emit();
    }
  }

  ngOnChanges(){
    console.log("teste");
  }

  ngOnInit(): void {
    if(!this.novoContato){
      this.novoContato = {
        nome:"",
        email:"",
        telefones:[""]
      }
    }
  }

}
