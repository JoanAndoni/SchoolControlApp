import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-alumnos-grupo',
  templateUrl: './ver-alumnos-grupo.component.html',
  styleUrls: ['./ver-alumnos-grupo.component.css']
})
export class VerAlumnosGrupoComponent implements OnInit {
  grupo: any;
  alumnos: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.grupo = this.authService.getGrupo();

    if (this.authService.profesorLoggedIn() || this.authService.adminLoggedIn()) {
      this.authService.buscarAlumnosGrupo(this.grupo).subscribe(grupo => {
        if (grupo.success) {
          this.alumnos = grupo.alumnos;
        } else {
          this.flashMessage.show(grupo.msg, { cssClass: 'alert-danger', timeout: 3000 });
          if (this.authService.profesorLoggedIn()) {
            this.router.navigate(['/clases']);
          } else if (this.authService.adminLoggedIn()) {
            this.router.navigate(['/profesores']);
          }
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  editarAlumno(matricula) {
    this.authService.setMatriculaAlumno(matricula);
    this.router.navigate(['/editarAlumno']);
  }
}
