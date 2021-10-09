import { Component} from '@angular/core';
import { Contato } from './models/Contato';
import { ContatoService } from './services/contatos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  mostrandoPreloader = false;

  constructor(){
    ContatoService.editarContatoClicado.subscribe(
      contato => {
        this.mostrarPreloader();
      }

    )
  }

  mostrarPreloader(){
    this.mostrandoPreloader = true;
  }

  esconderPreloader(){
    this.mostrandoPreloader = false;
  }

}
