import { Component} from '@angular/core';
import { Contato } from './models/Contato';
import { ContatoService } from './services/contatos.service';
import { EventHubService } from './services/event-hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  mostrandoPreloader = false;

  constructor(){
    EventHubService.carregamentoIniciado.subscribe(
      () => console.log("Carregamento iniciado")
    )

    EventHubService.carregamentoFinalizado.subscribe(
      () => console.log("Carregamento finalizado")
    )
  }

  mostrarPreloader(){
    this.mostrandoPreloader = true;
  }

  esconderPreloader(){
    this.mostrandoPreloader = false;
  }

}
