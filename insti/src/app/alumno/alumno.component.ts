import { Component } from '@angular/core';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  nombre: string = 'Juan';
  apellidos: string = 'Pérez';
  edad: number = 25;
  usuario: string = 'Juanin'
  telefono: string = '555-222-222'
  direccion: string = 'Calle Narnia 2'
}




