import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Tabs2Module } from '@coreui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Tabs2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
