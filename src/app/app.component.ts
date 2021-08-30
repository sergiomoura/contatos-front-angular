import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'contatos';
  mostrandoCreateContato = false;

  mostrarModal(){
    this.mostrandoCreateContato = true;
  }

  esconderModal(){
    this.mostrandoCreateContato = false;
  }

}
