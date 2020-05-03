import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  appUser$: Observable<any>;
  constructor(public authFire: AngularFireAuth,
              public router: Router,
              private http: HttpClient) {
    this.authFire.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      } 
    });
  }
  async login(email: string, password: string) {
    await this.authFire.signInWithEmailAndPassword(email, password);
    this.userInfo();
    this.router.navigate(['home']);
  }

  async register(email: string, password: string) {
    var result = await this.authFire.createUserWithEmailAndPassword(email, password);
    this.sendEmailVerification();
  }

  async sendEmailVerification() {
    await (await this.authFire.currentUser).sendEmailVerification();
    this.router.navigate(['verify-email']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.authFire.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout() {
    await this.authFire.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  public userInfo() : Observable<User> {
    const user = JSON.parse(localStorage.getItem('user'));
    return of(user);
  }

  async  loginWithGoogle() {
    await this.authFire.signInWithPopup(new auth.GoogleAuthProvider());
    this.userInfo();
    this.router.navigate(['home']);
  } 

  userSignUP(email, password) {
    return of(this.authFire.createUserWithEmailAndPassword(email, password).then((data) => {
      console.log(data);
    }));
  }
}
