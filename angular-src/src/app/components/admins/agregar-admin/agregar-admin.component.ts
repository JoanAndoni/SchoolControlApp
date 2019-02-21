import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// Import of the services
// import { ValidateService } from '../../../services/validate.service';
import { AuthService } from '../../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

// Bring out the Router so we can redirect from the code
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-admin',
  templateUrl: './agregar-admin.component.html',
  styleUrls: ['./agregar-admin.component.css']
})
export class AgregarAdminComponent implements OnInit {

  username: String;
  password: String;
  passwordConfirmation: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  agregarAdmin() {
    const admin = {
      permiso: 2,
      username: this.username,
      password: this.password
    }

    if (this.password === this.passwordConfirmation) {
      this.authService.registerAdmin(admin).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          // this.router.navigate(['/login']);
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          // this.router.navigate(['/admins']);
        }
      });
    }
    else {
      this.flashMessage.show('Las contraseñas no coinciden', { cssClass: 'alert-danger', timeout: 3000 });
    }
  }

}
