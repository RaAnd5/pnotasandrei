import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { IndexComponent } from './index/index.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BackNotasComponent } from './back-notas/back-notas.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { NotasCursosComponent } from './notas-cursos/notas-cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from './user/user.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
declarations: [
AppComponent,
InicioComponent,
IndexComponent,
PerfilComponent,
BackNotasComponent,
AlumnoComponent,
NotasCursosComponent,
UserComponent,
MessagesComponent
],

imports: [
BrowserModule,
RouterModule,
AppRoutingModule,
BrowserAnimationsModule,
MatToolbarModule,
MatIconModule

],


providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }