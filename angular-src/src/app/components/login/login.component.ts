import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matricula: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService

  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const alumnoprofesor = {
      matricula: this.matricula,
      password: this.password
    }

    const admin = {
      username: this.matricula,
      password: this.password
    }

    this.authService.authenticateAlumno(alumnoprofesor).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.alumno, 0)
        this.flashMessage.show("Bienvenido/a " + data.alumno.nombre + " " + data.alumno.paterno + " " + data.alumno.materno, {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.router.navigate(['/']);
      } else {
        this.authService.authenticateProfesor(alumnoprofesor).subscribe(data => {
          if (data.success) {
            this.authService.storeUserData(data.token, data.profesor, 1)
            this.flashMessage.show("Bienvenido/a " + data.profesor.nombre + " " + data.profesor.paterno + " " + data.profesor.materno, {
              cssClass: 'alert-success',
              timeout: 5000
            });
            this.router.navigate(['/']);
          } else {
            this.authService.authenticateAdmin(admin).subscribe(data => {
              if (data.success) {
                this.authService.storeUserData(data.token, data.admin, 2)
                this.flashMessage.show("Bienvenido/a " + data.admin.username, {
                  cssClass: 'alert-success',
                  timeout: 5000
                });
                this.router.navigate(['/']);
              } else {
                this.flashMessage.show("Los campos son incorrectos", {
                  cssClass: 'alert-danger',
                  timeout: 5000
                });
                this.router.navigate(['/login']);
              }
            });
          }
        });
        this.router.navigate(['/login']);
      }
    });
  }

}
