import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Usuario } from 'src/usuarios';




@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const usuariosDb = [

      (id: 1, dni:'222222x', nom:'hehe')
      (id: 2, dni:'333222x', nom:'hadge')
    ];

    return (usuariosDb);

  }

  genId(usuariosDb: Usuario[]): number (
    return usuariosDb.lenght > 0 ? Math.max(..usuariosDb.map(usuariosDb => usuariosDb.id))+1 : 11 ;
  )
}

 