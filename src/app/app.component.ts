import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { User } from './_models';
import { Router } from '@angular/router';

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
  }
  
  logout() {
      this.authService.logout();
  }
}
