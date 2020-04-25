import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lib-header',
  templateUrl: './lib-header.component.html',
  styleUrls: ['./lib-header.component.css']
})
export class LibHeaderComponent implements OnInit {
  public selectedItem: any;
  public title = 'Angular Library Management System';
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authservice.login();
  }

  onLogout() {
    this.authservice.logout();
  }
}
