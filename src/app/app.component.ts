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
      private authenticationService: AuthenticationService,
      private authService: AuthService
  ) {
      // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

      // if(this.authService.isLoggedIn) {
      //   this.router.navigate(['/home']);
      // } 
  }

  logout() {
      // this.authenticationService.logout();
      // this.router.navigate(['/']);
      this.authService.logout();
  }
}
