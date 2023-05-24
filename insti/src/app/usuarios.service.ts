import { Injectable } from '@angular/core';
import { Usuario } from 'src/usuarios';
import { MensajeService } from './mensaje.service';
import {Observable,of} from 'rxjs';
import  {USUARIOS} from 'src/mock-datos';
import {HttpClient, HttpHeaders} from '@angular/common/http';



 
@Injectable({
  providedIn: 'root'
})

export class UsuariosService {



  getUsuarios(): Observable<Usuario[]> {
    const listObservabledeUsuarios = of(USUARIOS);

    //LLamada a enviar el mensaje
    this.mesageService.add('Servicio de Usuarios: Usuarios recuperados');
    return listObservabledeUsuarios;
  }
   constructor(private http: HttpClient, private mesageService: MensajeService){ }

}


