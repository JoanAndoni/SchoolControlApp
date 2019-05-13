import { Component, OnInit } from '@angular/core';

// Import of the services
import { ValidateService } from '../../../services/validate.service';
import { AuthService } from '../../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

// Bring out the Router so we can redirect from the code
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.component.html',
  styleUrls: ['./agregar-profesor.component.css']
})
export class AgregarProfesorComponent implements OnInit {

  matricula: String;
  nombre: String;
  paterno: String;
  materno: String;
  posicion: String;
  telefono: String;
  email: String;
  password: String;
  passwordConfirmation: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  agregarProfesor() {
    const profesor = {
      permiso: 1,
      matricula: this.matricula,
      nombre: this.nombre,
      paterno: this.paterno,
      materno: this.materno,
      posicion: this.posicion,
      telefono: this.telefono,
      email: this.email,
      password: this.password
    }

    if (this.password === this.passwordConfirmation) {
      if (this.validateService.validateEmail(this.email)) {
        this.authService.registerProfesor(profesor).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            this.matricula = null;
            this.nombre = null;
            this.paterno = null;
            this.materno = null;
            this.posicion = null;
            this.telefono = null;
            this.email = null;
            this.password = null;
            this.passwordConfirmation = null;
          } else {
            this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          }
        });
      } else {
        this.flashMessage.show('Ingrese un correo valido', { cssClass: 'alert-danger', timeout: 3000 });
      }
    } else {
      this.flashMessage.show('Las contraseñas no coinciden', { cssClass: 'alert-danger', timeout: 3000 });
    }
    window.scroll(0, 0);
  }

}
