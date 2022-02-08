import  { NgModule }  from  '@angular/core';
import  { RouterModule, Routes }  from  '@angular/router';

import { AboutMEComponent } from './view/about-me/about-me.component';
import { Error404Component } from './view/error404/error404.component';
import { ListComponent } from './view/list/list.component';



const  routes:  Routes  = [
  { path: 'list', component: ListComponent },
  { path: 'about-me', component: AboutMEComponent},

  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: '**', component: Error404Component}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export  class  AppRoutingModule  {  }