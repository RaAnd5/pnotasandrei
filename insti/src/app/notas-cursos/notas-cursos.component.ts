import { Component } from '@angular/core';

@Component({
  selector: 'app-notas-cursos',
  templateUrl: './notas-cursos.component.html',
  styleUrls: ['./notas-cursos.component.css']
})
export class NotasCursosComponent {
  idAlumno: number = 1;
  DNI: string = '12345678A';
  nombre: string = 'Juanin';
  apellidos: string = 'Pérez García';
  curso: string = 'Programador';
  asignatura: string = 'Python';
  nota: number = 8.5;
}
