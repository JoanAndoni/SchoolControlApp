import { Component, OnInit } from '@angular/core';

// Import of the services
import { ValidateService } from '../../../services/validate.service';
import { AuthService } from '../../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  niveles: String[] = ['Preescolar', 'Primaria', 'Secundaria'];

  matricula: String;
  curp: String;
  nombre: String;
  paterno: String;
  materno: String;
  nivel: String;
  grado: String;
  grupo: String;
  fechaNacimiento: String;
  padre: String;
  email: String;
  numero: String;
  password: String;
  passwordConfirmation: String;

  matriculas: Number;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private validateService: ValidateService
  ) {
  }

  ngOnInit() {
    this.authService.getMatriculas().subscribe(data => {
      if (data.success) {
        this.matriculas = (data.matriculas+1);
        this.matricula = 'A';
        for (let index = data.matriculas.toString().length; index < 5; index++) {
          this.matricula = this.matricula + '0';
        }
        this.matricula = this.matricula + (data.matriculas + 1);
      } else {
        this.matriculas = -1;
      }
    });
  }

  agregarAlumno() {
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
      padre: this.padre,
      numero: this.numero,
      email: this.email,
      password: this.password
    };

    if (this.password === this.passwordConfirmation) {
      if (this.validateService.validateEmail(this.email)) {
        this.authService.registerAlumno(alumno).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            this.matricula = null;
            this.curp = null;
            this.nombre = null;
            this.paterno = null;
            this.materno = null;
            this.nivel = null;
            this.grado = null;
            this.grupo = null;
            this.fechaNacimiento = null;
            this.padre = null;
            this.numero = null;
            this.email = null;
            this.password = null;
            this.passwordConfirmation = null;

            const queryMatriculas = {
              matriculas: this.matriculas
            };

            this.authService.editarMatriculas(queryMatriculas).subscribe(update => {});
            this.ngOnInit();

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
