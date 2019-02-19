import { Component, OnInit, Input } from '@angular/core';

import { Alumno } from '../../../../models/alumno.model'

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  @Input() alumno: Alumno;
  constructor() {
  }

  ngOnInit() {
  }

}
