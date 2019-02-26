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

  matricula: String;
  textoConfirmacionPassword: String;
  password: String;
  passwordConfirmation: String;
  passwordNew: String;
  passwordNewConfirmacion: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.alumnoLoggedIn()) {
      this.authService.getProfileAlumno().subscribe(profile => {
        this.user = profile.alumno;
        this.matricula = profile.alumno.matricula;
        this.typeUser = 0;
      },
        err => {
          console.log(err);
          return false;
        });
    } else if (this.authService.profesorLoggedIn()) {
      this.authService.getProfileProfesor().subscribe(profile => {
        this.user = profile.profesor;
        this.matricula = profile.profesor.matricula;
        this.typeUser = 1;
      },
        err => {
          console.log(err);
          return false;
        });
    } else if (this.authService.adminLoggedIn()) {
      this.authService.getProfileAdmin().subscribe(profile => {
        this.user = profile.admin;
        this.matricula = profile.admin.username;
        this.typeUser = 2;
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

  eliminarAdmin(username) {
    const eliminar = {
      username: username,
      password: this.adminPassword
    }
    this.authService.deleteAdmin(eliminar).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.authService.logout();
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/profile']);
      }
    },
      err => {
        console.log(err);
        return false;
      });
  }

  allCorrect() {
    if (this.adminPassword === this.adminPasswordConfirmation && this.adminPassword && this.adminPasswordConfirmation && this.textoConfirmacion === "Acepto eliminar mi cuenta") {
      return true;
    } else {
      return false;
    }
  }

  allCorrectChangePassword() {
    if (this.password === this.passwordConfirmation && this.password && this.passwordConfirmation && this.passwordNew && this.passwordNewConfirmacion && this.passwordNew === this.passwordNewConfirmacion && this.textoConfirmacionPassword === "Acepto cambiar mi contraseña") {
      return true;
    } else {
      return false;
    }
  }

  cambiarPassword() {
    if (this.typeUser === 2) {
      const user = {
        username: this.matricula,
        password: this.password,
        newPassword: this.passwordNew
      }
      this.authService.editarPasswordAdmin(user).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          this.textoConfirmacionPassword = null;
          this.password = null;
          this.passwordConfirmation = null;
          this.passwordNew = null;
          this.passwordNewConfirmacion = null;
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      },
        err => {
          console.log(err);
          return false;
        });
    } else {
      const user = {
        matricula: this.matricula,
        password: this.password,
        newPassword: this.passwordNew
      }
      if (this.typeUser === 1) {
        this.authService.editarPasswordProfesor(user).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            this.textoConfirmacionPassword = null;
            this.password = null;
            this.passwordConfirmation = null;
            this.passwordNew = null;
            this.passwordNewConfirmacion = null;
          } else {
            this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          }
        },
          err => {
            console.log(err);
            return false;
          });
      } else if (this.typeUser == 0) {
        this.authService.editarPasswordAlumno(user).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            this.textoConfirmacionPassword = null;
            this.password = null;
            this.passwordConfirmation = null;
            this.passwordNew = null;
            this.passwordNewConfirmacion = null;
          } else {
            this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          }
        },
          err => {
            console.log(err);
            return false;
          });
      }
    }

  }
}
