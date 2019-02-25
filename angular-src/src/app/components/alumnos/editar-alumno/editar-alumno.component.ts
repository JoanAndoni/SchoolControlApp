import { Component, OnInit } from '@angular/core';

// Import of the services
import { AuthService } from '../../../services/auth.service';

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
  matricula: any;
  alumno: any;
  grupo: any;
  fecha: any;
  titulo: any;
  comentario: any;
  nombreMateria: any;
  promediosMaterias: number[] = [0, 0, 0];

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    var today: any = new Date();
    var dd: any = today.getDate();
    var mm: any = today.getMonth() + 1;
    var yyyy: any = today.getFullYear();
    if (dd < 10)
      dd = '0' + dd;
    if (mm < 10)
      mm = '0' + mm;
    today = mm + '/' + dd + '/' + yyyy;
    this.fecha = today;

    this.matricula = this.authService.getMatriculaAlumno();
    this.grupo = this.authService.getGrupo();
    const alumno = {
      matricula: this.matricula
    }
    this.authService.buscarAlumnoMatricula(alumno).subscribe(data => {
      if (data.success) {
        this.alumno = data.alumno;
        let indexMateria: number = 0;
        let sumaMateria: number = 0;
        let sum1: number = 0;
        let sum2: number = 0;
        let sum3: number = 0;
        for (let materia of data.alumno.materias) {
          sumaMateria = 0;
          for (var i = 0; i < materia.calificaciones.length; i++) {
            sumaMateria += materia.calificaciones[i];
          }
          sum1 += materia.calificaciones[0];
          sum2 += materia.calificaciones[1];
          sum3 += materia.calificaciones[2];
          this.promediosMaterias[indexMateria] = Math.round((sumaMateria / materia.calificaciones.length) * 100) / 100;
          indexMateria += 1;
        }
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/clases']);
      }
    });
  }

  comentar() {
    const comentario = {
      matricula: this.matricula,
      profesor: this.grupo.profesor,
      materia: this.grupo.nombreMateria,
      fecha: this.fecha,
      titulo: this.titulo,
      texto: this.comentario
    }

    this.authService.agregarComentario(comentario).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/clases']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }

}
