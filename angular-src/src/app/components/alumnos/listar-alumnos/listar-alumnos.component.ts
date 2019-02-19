import { Component, OnInit } from '@angular/core';

import { Alumno } from '../../../models/alumno.model'

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {
  alumnos = [
    new Alumno('S302', 'G092JDNQ91029', 'Joan Andoni', 'González', 'Rioz', 'Secundaria', 3, 'A', '20/07/1996', 'ContraseñaJoan'),
    new Alumno('S203', 'GORJJDNQ03459', 'Ian Gaél', 'González', 'Rioz', 'Secundaria', 2, 'B', '21/04/2005', 'ContraseñaIan'),
    new Alumno('K201', 'SUGRDNDQ91029', 'Susan Ixchel', 'González', 'Rioz', 'Preescolar', 2, 'A', '05/08/2000', 'ContraseñaSusan')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
