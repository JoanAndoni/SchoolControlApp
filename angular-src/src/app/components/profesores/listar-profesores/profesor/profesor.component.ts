import { Component, OnInit, Input } from '@angular/core';

import { Profesor } from '../../../../models/profesor.model'

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  @Input() profesor: Profesor;

  constructor() {
  }

  ngOnInit() {
  }

}
