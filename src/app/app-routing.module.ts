import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from "./components/sobre/sobre.component";
import { ListaDeContatosComponent } from "./components/lista-de-contatos/lista-de-contatos.component";

const routes: Routes = [
  {
    path: '',
    component: ListaDeContatosComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
