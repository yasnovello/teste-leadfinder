
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormularioComponent } from './formulario/formulario.component';

import { EnviarFormularioComponent } from './enviar-formulario/enviar-formulario.component';

import { RecuperarFormularioComponent } from './recuperar-formulario/recuperar-formulario.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './menu/menu.component';

import {

  MatButtonModule,

  MatCardModule,

  MatIconModule,

  MatInputModule,

  MatListModule,

  MatProgressSpinnerModule,

  MatSelectModule,

  MatSidenavModule,

  MatTableModule,

  MatToolbarModule
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';



@NgModule({

  declarations: [

    AppComponent,

    FormularioComponent,

    EnviarFormularioComponent,

    RecuperarFormularioComponent,

    MenuComponent

  ],

  imports: [

    BrowserModule,

    FormsModule,

    ReactiveFormsModule,

    AppRoutingModule,

    BrowserAnimationsModule,

    HttpClientModule,

    MatButtonModule,

    MatInputModule,

    MatCardModule,

    MatIconModule,

    MatListModule,

    MatProgressSpinnerModule,

    MatSelectModule,

    MatSidenavModule,

    MatTableModule,

    MatToolbarModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }