import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  matricula: String = "";
  profesor: any;

  //ADD CLASE
  nombreClase: String;
  nivel: String;
  grado: String;
  grupo: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.profesorLoggedIn()) {
      this.authService.getProfileProfesor().subscribe(profile => {
        this.profesor = profile.profesor;
      });
    } else if (this.authService.adminLoggedIn()) {
      this.matricula = this.authService.getMatricualVerProfesor();
      const profesor = {
        matricula: this.matricula
      }
      this.authService.buscarProfesorMatricula(profesor).subscribe(data => {
        if (data.success) {
          this.profesor = data.profesor;
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate(['/profesores']);
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  saveGrupoAlumnos(nivel, grado, grupo, nombreMateria, profesor) {
    const grupoSend = {
      nivel: nivel,
      grado: grado,
      grupo: grupo,
      nombreMateria: nombreMateria,
      profesor: profesor
    }
    this.authService.setGrupo(grupoSend);
    this.router.navigate(['/grupo']);
  }

  addClase() {
    if (this.authService.adminLoggedIn()) {
      const clase = {
        matricula: this.matricula,
        nombreClase: this.nombreClase,
        nivel: this.nivel,
        grado: this.grado,
        grupo: this.grupo
      }
      this.authService.addClaseProfesor(clase).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          this.matricula = null;
          this.nombreClase = null;
          this.nivel = null;
          this.grado = null;
          this.grupo = null;
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
        this.ngOnInit();
      });
    } else {
      this.router.navigate(['/profesores']);
    }
  }

  deleteClase(nombreClase, nivel, grado, grupo) {
    if (this.authService.adminLoggedIn()) {
      const clase = {
        matricula: this.matricula,
        nombreClase: nombreClase,
        nivel: nivel,
        grado: grado,
        grupo: grupo
      }
      this.authService.deleteClaseProfesor(clase).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
        this.ngOnInit();
      });
    } else {
      this.router.navigate(['/profesores']);
    }
  }
}
