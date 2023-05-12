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


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    IndexComponent,
    PerfilComponent,
    BackNotasComponent,
    AlumnoComponent,
    NotasCursosComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
