import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaDeContatosComponent } from './components/lista-de-contatos/lista-de-contatos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CreateContatoComponent } from './components/create-contato/create-contato.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaDeContatosComponent,
    ContatoComponent,
    CreateContatoComponent,
    SobreComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
