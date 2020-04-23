import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {

  public confirmedOrder;
  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRouter.queryParams.subscribe(book => {
    //  // this.confirmedOrder = book;
    // });
    this.confirmedOrder = window.history.state;
  }

}
