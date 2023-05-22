import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { IndexComponent } from './index/index.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BackNotasComponent } from './back-notas/back-notas.component';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'inicio', component: InicioComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'back-notas', component:BackNotasComponent},
  {path:'alumnos', component:UserComponent}
];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
