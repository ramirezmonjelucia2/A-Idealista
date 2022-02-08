import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './view/list/list.component';
import { PostComponent } from './view/list/post/post.component';
import { Error404Component } from './view/error404/error404.component';
import { AboutMEComponent } from './view/about-me/about-me.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    PostComponent,
    Error404Component,
    AboutMEComponent, 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
