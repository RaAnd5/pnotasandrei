import { Component } from '@angular/core';
import { Usuario } from 'src/usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-user',
  template: './user.component.html'
})
export class UserComponent{
  usuarios: any=[];

  getUsuarios():void{
    this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios=usuarios);

  }

  constructor(private usuarioService: UsuariosService) {
    
  };

  ngOninit(): void{
    this.getUsuarios();
  }

}