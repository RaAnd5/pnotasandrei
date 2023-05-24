import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Usuario } from 'src/usuarios';




@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const usuariosDb = [
      {id: 1, dni:'4876589W', nom:'Juan Carlos API' },
    {id: 2, dni:'7866984R', nom:'Zaira'},
    {id: 3, dni:'9158972E', nom:'Emma'}
    ];

    return (usuariosDb);

  }

  genId(heroes: Usuario[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

 