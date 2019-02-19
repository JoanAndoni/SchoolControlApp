import { Component, OnInit } from '@angular/core';

import { Profesor } from '../../../models/profesor.model'

@Component({
  selector: 'app-listar-profesores',
  templateUrl: './listar-profesores.component.html',
  styleUrls: ['./listar-profesores.component.css']
})
export class ListarProfesoresComponent implements OnInit {
  profesores = [
    new Profesor('P01', 'Joan Andoni', 'González', 'Rioz', 'Director', '5591088716', 'mcr_joan@hotmail.com', 'ContraseñaJoan'),
    new Profesor('P02', 'Ian Gaél', 'González', 'Rioz', 'Director', '5591088716', 'mcr_joan@hotmail.com', 'ContraseñaJoan'),
    new Profesor('P05', 'Susan Ixchel', 'González', 'Rioz', 'Director', '5591088716', 'mcr_joan@hotmail.com', 'ContraseñaJoan')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
