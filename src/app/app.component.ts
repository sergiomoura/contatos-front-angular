import { Component} from '@angular/core';
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
      () => this.mostrarPreloader()
    )

    EventHubService.carregamentoFinalizado.subscribe(
      () => this.esconderPreloader()
    )
  }

  mostrarPreloader(){
    this.mostrandoPreloader = true;
  }

  esconderPreloader(){
    this.mostrandoPreloader = false;
  }

}
