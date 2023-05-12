import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { IndexComponent } from './index/index.component';
import { PerfilComponent } from './perfil/perfil.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insti';
  cosas = "esta es la pedrardad del siugo"
}
