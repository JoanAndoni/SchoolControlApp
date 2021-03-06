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
  selector: 'app-listar-profesores',
  templateUrl: './listar-profesores.component.html',
  styleUrls: ['./listar-profesores.component.css']
})
export class ListarProfesoresComponent implements OnInit {
  matricula: String;
  nombre: String;
  apellido: String;

  profesor: any;
  profesores: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.authService.getAllProfesores().subscribe(data => {
      if (data.profesores.length > 0) {
        this.profesores = data.profesores;
      }
    });
  }

  buscarProfesorMatricula() {
    const profesor = {
      matricula: this.matricula
    }
    this.authService.buscarProfesorMatricula(profesor).subscribe(data => {
      if (data.success) {
        this.profesor = data.profesor;
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
    this.profesores = null;
    this.matricula = null;
  }

  buscarProfesoresNombre() {
    const profesor = {
      nombre: this.nombre,
      paterno: this.apellido
    }

    this.authService.buscarProfesoresNombre(profesor).subscribe(data => {
      if (data.success) {
        this.profesores = data.profesores;
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

    this.profesor = null;
    this.nombre = null;
    this.apellido = null;
  }

  verProfesor(matricula) {
    // this.authService.setMatriculaVerProfesor(matricula);
    this.router.navigate(['/clases', matricula]);
    window.scroll(0, 0);
  }

  eliminarProfesor(nombres, paterno, materno, matricula) {
    const profesor = {
      matricula: matricula
    }
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '50vh',
      height: '50vh',
      data: "¿Desea eliminar a el profesor " + nombres + " " + paterno + " " + materno + "?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.eliminarProfesor(profesor).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            this.profesor = null;
            this.profesores = null;
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
