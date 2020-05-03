import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-lib-header',
  templateUrl: './lib-header.component.html',
  styleUrls: ['./lib-header.component.css']
})
export class LibHeaderComponent implements OnInit {
  public selectedItem: any;
  public title = 'Angular Library Management System';
  public user: User;
  isLoggedIn: Observable<any>;
  constructor(private authservice: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit() {
    this.afAuth.authState.pipe(
      switchMap((user) => {
        return of(user)
      })
    ).subscribe(user => {
      this.user = user;
    })
  }

  onLogin(email: string, password: string) {
    this.authservice.login(email, password);
  }

  onLogout() {
    this.authservice.logout();
  }
}
