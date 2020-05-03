// import { AuthService } from '../auth/auth.-autho.service';
// import { Okta } from '../auth/okta.service';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { AuthenticationService } from '../auth/authentication.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   user;
//   oktaSignIn;
//   submitted: boolean;
//   loading: boolean;
//   error: any;
//   returnUrl: any;
//   constructor(private fb: FormBuilder, private route: ActivatedRoute,
//     private router: Router,
//     private authService: AuthService ) {
//       // redirect to home if already logged in
//       this.authService.isAuthenticated$.subscribe( loggedIn => {
//         if(loggedIn) {
//           this.router.navigate(['/home']);
//         }
//       })
//    }

//   ngOnInit() {
//     this.loginForm = this.fb.group({
//       username: new FormControl('', [Validators.required]),
//       password: new FormControl('', [Validators.required])
//     });
//     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//   }

//   get formControls() {
//     return this.loginForm.controls;
//   }

//   onLogin() {
//     this.authService.login();
//   }
// }


