import { Component} from '@angular/core';
import { Contato } from './models/Contato';
import { ContatoService } from './services/contatos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'contatos';
  mostrandoCreateContato = false;
  contatoNoModal!:Contato; 

  constructor(){
    ContatoService.editarContatoClicado.subscribe(
      contato => {
        this.mostrarModal(contato);
        console.log(contato);
      }

    )
  }

  mostrarModal(contato:Contato = {nome:"",email:"",telefones:[""]}){
    this.contatoNoModal = contato;
    this.mostrandoCreateContato = true;
  }

  esconderModal(){
    this.mostrandoCreateContato = false;
  }

}
