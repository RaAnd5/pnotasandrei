import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { IndexComponent } from './index/index.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BackNotasComponent } from './back-notas/back-notas.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'inicio', component: InicioComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'back-notas', component:BackNotasComponent},
];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
