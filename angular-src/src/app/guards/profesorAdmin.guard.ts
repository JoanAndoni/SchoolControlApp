// Injectable to protect the routerlinks that you should not pass if youre not logged in
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ProfesorAdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate() {
    if (this.authService.profesorLoggedIn()) {
      return true;
    } else if (this.authService.adminLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
