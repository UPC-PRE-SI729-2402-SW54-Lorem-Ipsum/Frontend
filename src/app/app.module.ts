// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  // Declara tu componente principal
  ],
  imports: [
    BrowserModule,  // Importa el módulo del navegador
    FormsModule     // Importa FormsModule para la gestión de formularios
  ],
  providers: [],
  bootstrap: [AppComponent]  // Indica el componente que se arrancará
})
export class AppModule { }
