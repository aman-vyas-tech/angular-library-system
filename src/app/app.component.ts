import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { User } from './_models';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;

  constructor(
      private router: Router,
      private authService: AuthService
  ) {
      
  }
  ngOnInit() {
    this.authService.localAuthSetup();
  }
  logout() {
      this.authService.logout();
  }
}
