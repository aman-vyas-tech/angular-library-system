import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {
  user: any;
  public confirmedOrder;
  constructor(private activatedRouter: ActivatedRoute,
              private authFire: AngularFireAuth) { }

  ngOnInit() {
    this.authFire.user.subscribe(user => {
      this.user = user.displayName;
    });
  }

}
