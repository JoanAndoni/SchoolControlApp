import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  typeUser: number;
  adminPassword: String;
  adminPasswordConfirmation: String;
  textoConfirmacion: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.alumnoLoggedIn()) {
      this.authService.getProfileAlumno().subscribe(profile => {
        this.user = profile.alumno;
        this.typeUser = 0;
        console.log(this.user);
      },
        err => {
          console.log(err);
          return false;
        });
    } else if (this.authService.profesorLoggedIn()) {
      this.authService.getProfileProfesor().subscribe(profile => {
        this.user = profile.profesor;
        this.typeUser = 1;
        console.log(this.user);
      },
        err => {
          console.log(err);
          return false;
        });
    } else if (this.authService.adminLoggedIn()) {
      this.authService.getProfileAdmin().subscribe(profile => {
        this.user = profile.admin;
        this.typeUser = 2;
        console.log(this.user);
      },
        err => {
          console.log(err);
          return false;
        });
    } else {
      this.flashMessage.show("Perfil no encontrado", { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(['/dashboard']);
    }
  }

  eliminarAdmin() {
    this.flashMessage.show("Administrador eliminado", { cssClass: 'alert-danger', timeout: 3000 });
    // this.router.navigate(['/login']);
  }

  allCorrect() {
    if (this.adminPassword === this.adminPasswordConfirmation && this.adminPassword && this.adminPasswordConfirmation && this.textoConfirmacion === "Acepto eliminar mi cuenta") {
      return true;
    } else {
      return false;
    }
  }
}
