import { Router } from "@angular/router";
import { AuthService } from "./../auth/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public isLoginMode = true;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem("user")) {
      this.router.navigate(["home"]);
    }
  }

  public switchLoginMode() {
    return !this.isLoginMode;
  }

  login(email, password) {
    console.log(email, password);
    this.auth.login(email, password);
  }

  signUp(email, password) {
    this.auth.userSignUP(email, password).subscribe((resData) => {
      console.log(resData);
    });
  }

  public loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
