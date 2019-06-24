import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeerdatosComponent } from './leerdatos/leerdatos.component';

const routes: Routes = [
  {path:"leerdatos", component: LeerdatosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
