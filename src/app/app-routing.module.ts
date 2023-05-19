import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajesComponent } from './listaPersonajes/listaPersonajes.component';

const routes: Routes = [
  { path: '', component: ListaPersonajesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
