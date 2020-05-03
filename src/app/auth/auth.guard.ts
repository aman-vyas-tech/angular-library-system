import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map } from 'rxjs/operators';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    user: User;
  constructor(private auth: AuthService,
              public afAuth: AngularFireAuth,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean | UrlTree> | boolean {
    return this.afAuth.authState.pipe(
      map((user) => {
        if (user) {
          return true;
        }
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
      })
    );
    
  }
}