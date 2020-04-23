import { AuthService } from '../auth/auth.service';
import { Okta } from './../auth/okta.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../auth/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user;
  oktaSignIn;
  submitted: boolean;
  loading: boolean;
  error: any;
  returnUrl: any;
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private authService: AuthService ) {
      // redirect to home if already logged in
      // if (this.authService.isLoggedIn) { 
      //   this.router.navigate(['/home']);
      // }
    
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get formControls() {
    return this.loginForm.controls;
  }

  // onLogin() {
  //   this.submitted = true;

  //       // stop here if form is invalid
  //       if (this.loginForm.invalid) {
  //           return;
  //       }

  //       this.loading = true;
  //       this.authenticationService.login(this.formControls.username.value, this.formControls.password.value)
  //           .pipe(first())
  //           .subscribe(
  //               data => {
  //                   this.router.navigate([this.returnUrl]);
  //               },
  //               error => {
  //                   this.error = error;
  //                   this.loading = false;
  //               });
  // }

  onLogin() {
    this.authService.login();
  }
}


