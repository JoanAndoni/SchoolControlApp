import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// Import of the services
// import { ValidateService } from '../../../services/validate.service';
import { AuthService } from '../../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

// Bring out the Router so we can redirect from the code
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {

  private preescolar: boolean = false;
  private primaria: boolean = false;
  private secundaria: boolean = false;

  matricula: String;
  curp: String;
  nombre: String;
  paterno: String;
  materno: String;
  nivel: String;
  grado: String;
  grupo: String;
  fechaNacimiento: String;
  password: String;
  passwordConfirmation: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  agregarAlumno() {
    if (this.preescolar) {
      this.nivel = "Preescolar";
    } else if (this.primaria) {
      this.nivel = "Primaria";
    } else if (this.secundaria) {
      this.nivel = "Secundaria";
    }

    const alumno = {
      permiso: 0,
      matricula: this.matricula,
      curp: this.curp,
      nombre: this.nombre,
      paterno: this.paterno,
      materno: this.materno,
      nivel: this.nivel,
      grado: this.grado,
      grupo: this.grupo,
      fechaNacimiento: this.fechaNacimiento,
      password: this.password
    }

    if (this.password === this.passwordConfirmation) {
      this.authService.registerAlumno(alumno).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          // this.router.navigate(['/login']);
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          // this.router.navigate(['/alumnos']);
        }
      });
    }
    else {
      this.flashMessage.show('Las contraseñas no coinciden', { cssClass: 'alert-danger', timeout: 3000 });
    }
  }

}
