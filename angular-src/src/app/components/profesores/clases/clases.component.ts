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

  constructor(private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.profesorLoggedIn()) {
      this.authService.getProfileProfesor().subscribe(profile => {
        this.profesor = profile.profesor;
        console.log(this.profesor);
      });
    } else if (this.authService.adminLoggedIn()) {
      this.matricula = this.authService.getMatricualVerProfesor();
      const profesor = {
        matricula: this.matricula
      }
      this.authService.buscarProfesorMatricula(profesor).subscribe(data => {
        if (data.success) {
          this.profesor = data.profesor;
          console.log(this.profesor);
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate(['/alumnos']);
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
