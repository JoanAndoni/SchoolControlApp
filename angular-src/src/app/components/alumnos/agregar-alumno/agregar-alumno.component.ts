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
  password: String;
  passwordConfirmation: String;

  nombre: String;
  paterno: String;
  materno: String;
  curp: String;
  nivel: String;
  grado: String;
  grupo: String = 'A';
  fechaNacimiento: String;
  entidadNacimiento: String;
  nacionalidad: String = 'Mexicana';

  sexo: String;
  peso: Number;
  estatura: Number;
  discapacidad: String = 'Ninguna';
  lentes: String = 'No';
  grupoSanguineo: String;

  entidad: String;
  municipio: String;
  colonia: String;
  calle: String;
  numeroExt: String;
  numeroInt: String;
  referencia: String;
  entreCalles: String;
  telefono: String;
  cp: String;

  email: String;
  redSocial: String;

  padre1curp: String;
  padre1nombre: String;
  padre1sexo: String;
  padre1fechaNacimiento: String;
  padre1entidadNacimiento: String;
  padre1nacionalidad: String;
  padre1gradoEstudios: String;
  padre1parentesco: String;
  padre1ocupacion: String;
  padre1estadoCivil: String;
  padre1email: String;
  padre1telefono: String;
  padre1celular: String;
  padre1redSocial: String;

  padre2curp: String;
  padre2nombre: String;
  padre2sexo: String;
  padre2fechaNacimiento: String;
  padre2entidadNacimiento: String;
  padre2nacionalidad: String;
  padre2gradoEstudios: String;
  padre2parentesco: String;
  padre2ocupacion: String;
  padre2estadoCivil: String;
  padre2email: String;
  padre2telefono: String;
  padre2celular: String;
  padre2redSocial: String;

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
        this.matriculas = (data.matriculas + 1);
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
      password: this.password,

      nombre: this.nombre,
      paterno: this.paterno,
      materno: this.materno,
      curp: this.curp,
      nivel: this.nivel,
      grado: this.grado,
      grupo: this.grupo.toUpperCase(),
      fechaNacimiento: this.fechaNacimiento,
      entidadNacimiento: this.entidadNacimiento,
      nacionalidad: this.nacionalidad,

      sexo: this.sexo,
      peso: this.peso,
      estatura: this.estatura,
      discapacidad: this.discapacidad,
      lentes: this.lentes,
      grupoSanguineo: this.grupoSanguineo,

      entidad: this.entidad,
      municipio: this.municipio,
      colonia: this.colonia,
      calle: this.calle,
      numeroExt: this.numeroExt,
      numeroInt: this.numeroInt,
      referencia: this.referencia,
      entreCalles: this.entreCalles,
      telefono: this.telefono,
      cp: this.cp,

      email: this.email,
      redSocial: this.redSocial,

      padres: {
        primero: {
          curp: this.padre1curp,
          nombre: this.padre1nombre,
          sexo: this.padre1sexo,
          fechaNacimiento: this.padre1fechaNacimiento,
          entidadNacimiento: this.padre1entidadNacimiento,
          nacionalidad: this.padre1nacionalidad,
          gradoEstudios: this.padre1gradoEstudios,
          parentesco: this.padre1parentesco,
          ocupacion: this.padre1ocupacion,
          estadoCivil: this.padre1estadoCivil,
          email: this.padre1email,
          telefono: this.padre1telefono,
          celular: this.padre1celular,
          redSocial: this.padre1redSocial
        },
        segundo: {
          curp: this.padre2curp,
          nombre: this.padre2nombre,
          sexo: this.padre2sexo,
          fechaNacimiento: this.padre2fechaNacimiento,
          entidadNacimiento: this.padre2entidadNacimiento,
          nacionalidad: this.padre2nacionalidad,
          gradoEstudios: this.padre2gradoEstudios,
          parentesco: this.padre2parentesco,
          ocupacion: this.padre2ocupacion,
          estadoCivil: this.padre2estadoCivil,
          email: this.padre2email,
          telefono: this.padre2telefono,
          celular: this.padre2celular,
          redSocial: this.padre2redSocial
        }
      }
    };

    console.log(alumno);

    if (this.password === this.passwordConfirmation) {
      if (this.validateService.validateEmail(this.email)) {

        this.authService.registerAlumno(alumno).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            this.matricula = null;
            this.password = null;
            this.passwordConfirmation = null;

            this.nombre = null;
            this.paterno = null;
            this.materno = null;
            this.curp = null;
            this.nivel = null;
            this.grado = null;
            this.grupo = null;
            this.fechaNacimiento = null;
            this.entidadNacimiento = null;
            this.nacionalidad = null;

            this.sexo = null;
            this.peso = null;
            this.estatura = null;
            this.discapacidad = null;
            this.lentes = null;
            this.grupoSanguineo = null;

            this.entidad = null;
            this.municipio = null;
            this.colonia = null;
            this.calle = null;
            this.numeroExt = null;
            this.numeroInt = null;
            this.referencia = null;
            this.entreCalles = null;
            this.telefono = null;
            this.cp = null;

            this.email = null;
            this.redSocial = null;

            this.padre1curp = null;
            this.padre1nombre = null;
            this.padre1sexo = null;
            this.padre1fechaNacimiento = null;
            this.padre1entidadNacimiento = null;
            this.padre1nacionalidad = null;
            this.padre1gradoEstudios = null;
            this.padre1parentesco = null;
            this.padre1ocupacion = null;
            this.padre1estadoCivil = null;
            this.padre1email = null;
            this.padre1telefono = null;
            this.padre1celular = null;
            this.padre1redSocial = null;

            this.padre2curp = null;
            this.padre2nombre = null;
            this.padre2sexo = null;
            this.padre2fechaNacimiento = null;
            this.padre2entidadNacimiento = null;
            this.padre2nacionalidad = null;
            this.padre2gradoEstudios = null;
            this.padre2parentesco = null;
            this.padre2ocupacion = null;
            this.padre2estadoCivil = null;
            this.padre2email = null;
            this.padre2telefono = null;
            this.padre2celular = null;
            this.padre2redSocial = null;

            const queryMatriculas = {
              matriculas: this.matriculas
            };

            this.authService.editarMatriculas(queryMatriculas).subscribe(update => { });
            this.ngOnInit();

          } else {
            this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          }
        });
      } else {
        this.flashMessage.show('Ingrese un correo valido del alumno', { cssClass: 'alert-danger', timeout: 3000 });
      }
    } else {
      this.flashMessage.show('Las contraseñas no coinciden', { cssClass: 'alert-danger', timeout: 3000 });
    }
    window.scroll(0, 0);
  }

}
