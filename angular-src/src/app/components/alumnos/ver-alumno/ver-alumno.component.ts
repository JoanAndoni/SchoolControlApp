import { Component, OnInit, Input } from '@angular/core';

// Import of the services
import { AuthService } from '../../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

// Bring out the Router so we can redirect from the code
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-alumno',
  templateUrl: './ver-alumno.component.html',
  styleUrls: ['./ver-alumno.component.css']
})
export class VerAlumnoComponent implements OnInit {
  matricula: String;
  alumno: Object;
  promediosMaterias: number[] = [0, 0, 0];
  promediosTrimestres: number[] = [];
  promedioFinal: number;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {
    this.matricula = this.authService.getMatricualVerAlumno();
  }

  ngOnInit() {
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
        this.promediosTrimestres.push(Math.round((sum1 / data.alumno.materias.length) * 100) / 100);
        this.promediosTrimestres.push(Math.round((sum2 / data.alumno.materias.length) * 100) / 100);
        this.promediosTrimestres.push(Math.round((sum3 / data.alumno.materias.length) * 100) / 100);
        var sumTotal = 0;
        for (var i = 0; i < this.promediosTrimestres.length; i++) {
          sumTotal += this.promediosTrimestres[i];
        }
        this.promedioFinal = sumTotal / this.promediosTrimestres.length;
        console.log(this.promediosTrimestres);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/alumnos']);
      }
    });
  }

}
