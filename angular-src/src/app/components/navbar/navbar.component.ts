import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isResponsive: boolean = false;
  showDropdown: boolean = false;
  innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    if (this.innerWidth < 995) {
      this.isResponsive = true;
      this.showDropdown = false;
    } else {
      this.isResponsive = false;
      this.showDropdown = false;
    }
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 995) {
      this.isResponsive = true;
    }
  }

  makeDropdown() {
    if (this.showDropdown) {
      this.showDropdown = false;
    } else if (!this.showDropdown) {
      this.showDropdown = true;
    }
  }

  onLogoutClick() {
    // Send the instruction to clear the local storage and the memory of the user logged in
    this.authService.logout()
    this.flashMessage.show('Has cerrado sesion', {
      cssClass: 'alert-warning',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }

}
