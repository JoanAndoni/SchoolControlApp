import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-alumnos-grupo',
  templateUrl: './ver-alumnos-grupo.component.html',
  styleUrls: ['./ver-alumnos-grupo.component.css']
})
export class VerAlumnosGrupoComponent implements OnInit {
  // VARIABLES PARA RECIBIR LOS ARGUMENTOS
  grupo_nombreMateria: string;
  grupo_profesor: string;
  grupo_nivel: string;
  grupo_grado: string;
  grupo_grupo: string;

  profesor_matricula: string;

  grupo: any;
  alumnos: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.grupo_nombreMateria = params.get('nombre');
      this.grupo_profesor = params.get('profesor');
      this.grupo_nivel = params.get('nivel');
      this.grupo_grado = params.get('grado');
      this.grupo_grupo = params.get('grupo');
    });

    this.grupo = {
      nivel: this.grupo_nivel,
      grado: this.grupo_grado,
      grupo: this.grupo_grupo,
      nombreMateria: this.grupo_nombreMateria,
      profesor: this.grupo_profesor
    }

    if (this.authService.profesorLoggedIn()) {
      this.authService.getProfileProfesor().subscribe(profile => {
        this.profesor_matricula = profile.profesor.matricula;
      },
        err => {
          console.log(err);
          return false;
        });
    } else if (this.authService.adminLoggedIn) {
      const profesor = {
        nombre: this.grupo_profesor
      }
      this.authService.buscarProfesoresNombre(profesor).subscribe(data => {
        if (data.success) {
          console.log(data.profesores);
          console.log(data.profesores[0].matricula);
          this.profesor_matricula = data.profesores[0].matricula;
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    }

    this.authService.buscarAlumnosGrupo(this.grupo).subscribe(grupo => {
      if (grupo.success) {
        this.alumnos = grupo.alumnos;
      } else {
        this.flashMessage.show(grupo.msg, { cssClass: 'alert-danger', timeout: 3000 });
        if (this.authService.profesorLoggedIn()) {
          this.router.navigate(['/clases', this.profesor_matricula]);
        } else if (this.authService.adminLoggedIn()) {
          this.router.navigate(['/clases', this.profesor_matricula]);
        }
      }
    });
  }

  editarAlumno(matricula) {
    this.router.navigate(['/editarAlumno', this.grupo_nombreMateria, this.grupo_profesor, this.grupo_nivel, this.grupo_grado, this.grupo_grupo, matricula]);
  }
}
