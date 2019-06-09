import { Component, OnInit } from '@angular/core';

// Import of the services
import { AuthService } from '../../../services/auth.service';

import { ActivatedRoute } from '@angular/router';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

// Bring out the Router so we can redirect from the code
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})

export class EditarAlumnoComponent implements OnInit {
  // VARIABLES PARA RECIBIR LOS ARGUMENTOS
  grupo_nombreMateria: string;
  grupo_profesor: string;
  grupo_nivel: string;
  grupo_grado: string;
  grupo_grupo: string;
  matricula: any;

  // VARIBALES GENERALES PARA EL COMPONENTE
  alumno: any;
  grupo: any;

  // VARIABLES PARA LOS COMPONENTES
  titulo: any;
  comentario: any;

  // VARIABLES PARA EL REQUEST CAMBIO DE CALIFICACIONES
  materiaCalificaciones: String;
  calificacionesCambiar: number[];

  // VARIABLES PARA CALIFICAR MATERIA
  trimestre: number;
  calificacion: number;
  trimestres: number[] = [1, 2, 3]

  // VARIABLE PARA EL DISPLAY DE PROMEDIOS
  promedioMateria: number = null;

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
      this.matricula = params.get('id');
    });

    this.grupo = {
      nivel: this.grupo_nivel,
      grado: this.grupo_grado,
      grupo: this.grupo_grupo,
      nombreMateria: this.grupo_nombreMateria,
      profesor: this.grupo_profesor
    }

    const alumno = {
      matricula: this.matricula
    }

    this.authService.buscarAlumnoMatricula(alumno).subscribe(data => {
      if (data.success) {
        this.alumno = data.alumno;
        let sum: number = 0;
        for (let materia of data.alumno.materias) {
          if (materia.nombreMateria === this.grupo_nombreMateria) {
            for (var i = 0; i < materia.calificaciones.length; i++) {
              sum += materia.calificaciones[i];
            }
            this.promedioMateria = sum / materia.calificaciones.length;
          }
        }
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/']);
      }
    });
  }

  comentar() {
    const comentario = {
      matricula: this.matricula,
      profesor: this.grupo.profesor,
      materia: this.grupo.nombreMateria,
      titulo: this.titulo,
      texto: this.comentario
    }

    this.authService.agregarAdminComentario(comentario).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.titulo = null;
        this.comentario = null;
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      window.scroll(0, 0);
      this.ngOnInit();
    });
  }

  calificarMateria() {
    for (let materia of this.alumno.materias) {
      if (materia.nombreMateria === this.grupo_nombreMateria) {
        this.calificacionesCambiar = materia.calificaciones;
      }
    }

    this.calificacionesCambiar[this.trimestre - 1] = this.calificacion;

    const calificaciones = {
      matricula: this.matricula,
      nombreMateria: this.grupo_nombreMateria,
      calificaciones: this.calificacionesCambiar
    }

    this.authService.cambiarCalificaciones(calificaciones).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.trimestre = null;
        this.calificacion = null;
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      window.scroll(0, 0);
      this.ngOnInit();
    });
  }

}
