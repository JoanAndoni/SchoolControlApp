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
  matricula: String = "";
  alumno: Object;
  promediosMaterias: number[] = [0, 0, 0, 0, 0, 0, 0];
  promediosTrimestres: number[] = [];
  promedioFinal: number;

  profesoresGrupo: any;

  editComentario: boolean;
  comentarioEdit: any;

  newNombreProfesor: String;
  newNombreMateria: String;

  nombreMateriaDelete: String;

  niveles: String[] = ["Preescolar", "Primaria", "Secundaria"];

  nivel: String;
  grado: String;
  grupo: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.adminLoggedIn()) {
      this.matricula = this.authService.getMatriculaAlumno();
      const alumno = {
        matricula: this.matricula
      }
      this.authService.buscarAlumnoMatricula(alumno).subscribe(data => {
        if (data.success) {
          this.alumno = data.alumno;
          const grupo = {
            nivel: data.alumno.nivel,
            grado: data.alumno.grado,
            grupo: data.alumno.grupo
          }
          this.authService.getProfesoresGrupo(grupo).subscribe(data => {
            if (data.success) {
              this.profesoresGrupo = data.profesores;
            }
          });
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
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate(['/alumnos']);
        }
      });
    } else if (this.authService.alumnoLoggedIn()) {
      this.authService.getProfileAlumno().subscribe(profile => {
        this.alumno = profile.alumno;
        let indexMateria: number = 0;
        let sumaMateria: number = 0;
        let sum1: number = 0;
        let sum2: number = 0;
        let sum3: number = 0;
        for (let materia of profile.alumno.materias) {
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
        this.promediosTrimestres.push(Math.round((sum1 / profile.alumno.materias.length) * 100) / 100);
        this.promediosTrimestres.push(Math.round((sum2 / profile.alumno.materias.length) * 100) / 100);
        this.promediosTrimestres.push(Math.round((sum3 / profile.alumno.materias.length) * 100) / 100);
        var sumTotal = 0;
        for (var i = 0; i < this.promediosTrimestres.length; i++) {
          sumTotal += this.promediosTrimestres[i];
        }
        this.promedioFinal = sumTotal / this.promediosTrimestres.length;
      },
        err => {
          console.log(err);
          return false;
        });
    } else {
      this.router.navigate(['/']);
    }
  }

  agregarMateria() {
    const materia = {
      matricula: this.matricula,
      nombreMateria: this.newNombreMateria,
      profesor: this.newNombreProfesor
    }

    this.authService.agregarMateria(materia).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      this.ngOnInit();
    });
  }

  eliminarMateria() {
    const materia = {
      matricula: this.matricula,
      nombreMateria: this.nombreMateriaDelete
    }

    this.authService.eliminarMateria(materia).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      this.ngOnInit();
    });
  }

  editarComentario(titulo, fecha, profesor, materia, texto) {
    this.editComentario = true;
    this.comentarioEdit = {
      titulo: titulo,
      texto: texto,
      profesor: profesor,
      materia: materia,
      fecha: fecha
    }
  }

  cancelarPost() {
    this.editComentario = false;
  }

  editarPost() {
    const comentario = {
      matricula: this.matricula,
      titulo: this.comentarioEdit.titulo,
      texto: this.comentarioEdit.texto
    }

    this.authService.editarComentario(comentario).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      this.ngOnInit();
      this.comentarioEdit = null;
    });
    this.editComentario = false;
  }

  eliminarComentario(titulo) {
    if (this.authService.adminLoggedIn()) {
      const comentario = {
        matricula: this.matricula,
        titulo: titulo
      }
      this.authService.eliminarComentario(comentario).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
        this.ngOnInit();
      });
    } else {
      this.router.navigate(['/alumnos']);
    }
  }

  editarGrupoAlumno() {
    if (this.authService.adminLoggedIn()) {
      const grupo = {
        matricula: this.matricula,
        nivel: this.nivel,
        grado: this.grado,
        grupo: this.grupo
      }
      this.authService.editarGrupo(grupo).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          this.nivel = null;
          this.grado = null;
          this.grupo = null;
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
        this.ngOnInit();
      });
    } else {
      this.router.navigate(['/alumnos']);
    }
  }
}
