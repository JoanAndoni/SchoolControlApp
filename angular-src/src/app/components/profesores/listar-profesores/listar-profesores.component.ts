import { Component, OnInit } from '@angular/core';

// Import of the services
import { AuthService } from '../../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

// Bring out the Router so we can redirect from the code
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-profesores',
  templateUrl: './listar-profesores.component.html',
  styleUrls: ['./listar-profesores.component.css']
})
export class ListarProfesoresComponent implements OnInit {
  matricula: String;
  nombre: String;

  profesor: any;
  profesores: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
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
      nombre: this.nombre
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
  }

  verProfesor(matricula) {
    this.authService.setMatriculaVerProfesor(matricula);
    this.router.navigate(['/clases']);
  }

  eliminarProfesor(matricula) {
    const profesor = {
      matricula: matricula
    }

    this.authService.eliminarProfesor(profesor).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.profesor = null;
        this.profesores = null;
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      this.ngOnInit();
    });
  }

}
