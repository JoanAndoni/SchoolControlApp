import { Component, OnInit } from '@angular/core';

// Import of the services
import { AuthService } from '../../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

// Bring out the Router so we can redirect from the code
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {
  matricula: String;
  nombre: String;

  nivel: String;
  grado: String;
  grupo: String;

  alumno: any;
  alumnos: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  buscarAlumnoMatricula() {
    const alumno = {
      matricula: this.matricula
    }
    this.authService.buscarAlumnoMatricula(alumno).subscribe(data => {
      if (data.success) {
        this.alumno = data.alumno;
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
    this.alumnos = null;
    this.matricula = null;
  }

  buscarAlumnosNombre() {
    const alumno = {
      nombre: this.nombre
    }
    this.authService.buscarAlumnosNombre(alumno).subscribe(data => {
      if (data.success) {
        this.alumnos = data.alumnos;
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
    this.alumno = null;
    this.nombre = null;
  }

  buscarAlumnosGrupo() {
    const grupo = {
      nivel: this.nivel,
      grado: this.grado,
      grupo: this.grupo
    }
    this.authService.buscarAlumnosGrupoRaw(grupo).subscribe(data => {
      if (data.success) {
        this.alumnos = data.alumnos;
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
    this.alumno = null;
    this.nivel = null;
    this.grado = null;
    this.grupo = null;
  }

  verAlumno(matricula) {
    this.authService.setMatriculaAlumno(matricula);
    this.router.navigate(['/verAlumno']);
  }

  eliminarAlumno(nombres, paterno, materno, matricula): void {
    const alumno = {
      matricula: matricula
    }
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "¿Deseas eliminar a el alumno " + nombres + " " + paterno + " " + materno + "?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.eliminarAlumno(alumno).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            this.alumno = null;
            this.alumnos = null;
          } else {
            this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          }
          window.scroll(0, 0);
          this.ngOnInit();
        });
      }
    });
  }

}
