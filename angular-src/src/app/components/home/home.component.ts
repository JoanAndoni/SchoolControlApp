import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public numeroAlumnos: number = 244;
  public numeroGrupos: number = 12;
  public numeroProfesores: number = 22;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
