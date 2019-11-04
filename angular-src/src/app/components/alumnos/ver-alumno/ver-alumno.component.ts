import { Component, OnInit, Input } from '@angular/core';

// Import of the services
import { AuthService } from '../../../services/auth.service';

import { ActivatedRoute } from '@angular/router';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

// Bring out the Router so we can redirect from the code
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-ver-alumno',
  templateUrl: './ver-alumno.component.html',
  styleUrls: ['./ver-alumno.component.css']
})
export class VerAlumnoComponent implements OnInit {
  // VARIABLES PARA INICIAR EL COMPONENTE
  matricula: String = "";
  alumno: any;

  // VARIABLES PARA EL CAMBIO DE GRUPO
  nivel: String;
  grado: String;
  grupo: String = "A";

  editGrupo: boolean;
  editAlumno: boolean;


  // ARRAY PARA EL DISPLAY DE NIVELES
  niveles: String[] = ["Preescolar", "Primaria", "Secundaria"];

  // VARIABLES PARA LOS PROMEDIOS
  promediosMaterias: number[] = [0, 0, 0, 0, 0, 0, 0];
  promediosTrimestres: number[] = [];
  promedioFinal: number;

  // VARIABLE PARA RECIBIR A LOS PROFESORES CON SUS GRUPOS
  profesoresGrupo: any;

  // VARIABLES PARA AGREGAR MATERIAS AL ALUMNO
  newNombreProfesor: String = "";
  newNombreMateria: String = "";

  // VARIABLE PARA ELIMINAR MATERIA DEL ALUMNO
  nombreMateriaDelete: String = "";

  // VARIABLES PARA EDITAR UN COMENTARIO
  editComentario: boolean;
  comentarioEdit: any;

  constructor(
    private flashMessage: FlashMessagesService,
    public authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.activatedRoute.paramMap.subscribe(params => {
      this.matricula = params.get('id');
    });
    const alumno = {
      matricula: this.matricula
    };
    if (this.authService.adminLoggedIn()) {
      this.authService.buscarAlumnoMatricula(alumno).subscribe(data => {
        if (data.success) {
          this.alumno = data.alumno;
          const parts = data.alumno.fechaNacimiento.split('-');
          this.alumno.fechaNacimiento = new Date(parts[2], parts[1] - 1, parts[0]).toISOString().split('T')[0];
          if (data.alumno.materias.length > 0) {
            this.nombreMateriaDelete = data.alumno.materias[0].nombreMateria;
          }

          const grupo = {
            nivel: data.alumno.nivel,
            grado: data.alumno.grado,
            grupo: data.alumno.grupo
          }
          this.authService.getProfesoresGrupo(grupo).subscribe(data => {
            if (data.success) {
              this.profesoresGrupo = data.clases;
              if (this.profesoresGrupo.length > 0) {
                this.newNombreProfesor = this.profesoresGrupo[0]._id;
              }
            }
          });


          // PROMEDIO DE MATERIAS
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
          //******************//

        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate(['/alumnos']);
        }
      });
    } else if (this.authService.alumnoLoggedIn()) {
      this.authService.getProfileAlumno().subscribe(profile => {
        this.alumno = profile.alumno;
        if (this.matricula != profile.alumno.matricula) {
          this.router.navigate(['/verAlumno', profile.alumno.matricula]);
        }

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
    if (this.newNombreMateria === "") {
      this.flashMessage.show("Selecciona una clase válida", { cssClass: 'alert-danger', timeout: 3000 });
    } else {
      this.authService.agregarMateria(materia).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          this.newNombreMateria = "";
          this.nombreMateriaDelete = "";
          this.ngOnInit();
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    }
    window.scroll(0, 0);
  }

  eliminarMateria() {
    const materia = {
      matricula: this.matricula,
      nombreMateria: this.nombreMateriaDelete
    }

    this.authService.eliminarMateria(materia).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.nombreMateriaDelete = "";
        this.ngOnInit();
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      window.scroll(0, 0);
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

  editarGrupo() {
    if (this.editGrupo) {
      this.nivel = null;
      this.grado = null;
      this.grupo = 'A';
      this.editGrupo = false;
    } else {
      this.editGrupo = true;
    }
  }

  editarGrupoAlumno() {
    if (this.authService.adminLoggedIn()) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '50vh',
        height: '50vh',
        // tslint:disable-next-line: max-line-length
        data: "¿Desea cambiar el grupo de " + this.alumno.nombre + " " + this.alumno.paterno + " " + this.alumno.materno + ", aceptando que se eliminarán las materias y comentarios previamente asignados del alumno?"
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const grupo = {
            matricula: this.matricula,
            nivel: this.nivel,
            grado: this.grado,
            grupo: this.grupo.toUpperCase()
          }
          this.authService.editarGrupo(grupo).subscribe(data => {
            if (data.success) {
              this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
              this.nivel = null;
              this.grado = null;
              this.grupo = 'A';
              window.location.reload();
            } else {
              this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
              this.editGrupo = false;
            }
          });
        } else {
          this.nivel = null;
          this.grado = null;
          this.grupo = 'A';
          this.editGrupo = false;
        }
      });
    }
  }

  editarAlumno() {
    if (this.editAlumno) {
      this.editAlumno = false;
    } else {
      this.editAlumno = true;
    }
  }

  editarAlumnoDatos() {
    if (this.authService.adminLoggedIn()) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '50vh',
        height: '50vh',
        // tslint:disable-next-line: max-line-length
        data: '¿Desea cambiar los datos de ' + this.alumno.nombre + ' ' + this.alumno.paterno + ' ' + this.alumno.materno + ', aceptando que no se podrá recuperar la información?'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const dataAlumno = {
            nombre: this.alumno.nombre,
            paterno: this.alumno.paterno,
            materno: this.alumno.materno,
            curp: this.alumno.curp,
            fechaNacimiento: this.alumno.fechaNacimiento,
            entidadNacimiento: this.alumno.entidadNacimiento,
            nacionalidad: this.alumno.nacionalidad,

            sexo: this.alumno.sexo,
            peso: this.alumno.peso,
            estatura: this.alumno.estatura,
            discapacidad: this.alumno.discapacidad,
            lentes: this.alumno.lentes,
            grupoSanguineo: this.alumno.grupoSanguineo,

            entidad: this.alumno.entidad,
            municipio: this.alumno.municipio,
            colonia: this.alumno.colonia,
            calle: this.alumno.calle,
            numeroExt: this.alumno.numeroExt,
            numeroInt: this.alumno.numeroInt,
            referencia: this.alumno.referencia,
            entreCalles: this.alumno.entreCalles,
            telefono: this.alumno.telefono,
            cp: this.alumno.cp,

            email: this.alumno.email,
            redSocial: this.alumno.redSocial,

            padres: {
              primero: {
                curp: this.alumno.padres.primero.curp,
                nombre: this.alumno.padres.primero.nombre,
                sexo: this.alumno.padres.primero.sexo,
                fechaNacimiento: this.alumno.padres.primero.fechaNacimiento,
                entidadNacimiento: this.alumno.padres.primero.entidadNacimiento,
                nacionalidad: this.alumno.padres.primero.nacionalidad,
                gradoEstudios: this.alumno.padres.primero.gradoEstudios,
                parentesco: this.alumno.padres.primero.parentesco,
                ocupacion: this.alumno.padres.primero.ocupacion,
                estadoCivil: this.alumno.padres.primero.estadoCivil,
                email: this.alumno.padres.primero.email,
                telefono: this.alumno.padres.primero.telefono,
                celular: this.alumno.padres.primero.celular,
                redSocial: this.alumno.padres.primero.redSocial
              },
              segundo: {
                curp: this.alumno.padres.primero.curp,
                nombre: this.alumno.padres.primero.nombre,
                sexo: this.alumno.padres.primero.sexo,
                fechaNacimiento: this.alumno.padres.primero.fechaNacimiento,
                entidadNacimiento: this.alumno.padres.primero.entidadNacimiento,
                nacionalidad: this.alumno.padres.primero.nacionalidad,
                gradoEstudios: this.alumno.padres.primero.gradoEstudios,
                parentesco: this.alumno.padres.primero.parentesco,
                ocupacion: this.alumno.padres.primero.ocupacion,
                estadoCivil: this.alumno.padres.primero.estadoCivil,
                email: this.alumno.padres.primero.email,
                telefono: this.alumno.padres.primero.telefono,
                celular: this.alumno.padres.primero.celular,
                redSocial: this.alumno.padres.primero.redSocial
              }
            }
          };
          const nuevoAlumno = {
            matricula: this.matricula,
            alumno: dataAlumno
          };
          this.authService.editarAlumno(nuevoAlumno).subscribe(data => {
            if (data.success) {
              this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
              window.location.reload();
            } else {
              this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
              this.editAlumno = false;
            }
          });
        } else {
          this.editAlumno = false;
        }
      });
    }
  }
}
