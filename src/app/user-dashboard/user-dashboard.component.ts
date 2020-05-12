import { CheckoutService } from "./../services/checkout.service";
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent implements OnInit {
  public isBooks = false;
  books: any;
  useremail: string;
  username: string;
  constructor(
    private checkoutService: CheckoutService,
    private authFire: AngularFireAuth
  ) {}

  ngOnInit() {
    this.authFire.authState.subscribe((user) => {
      if (user && user.email) {
        this.useremail = user.email;
        this.username = user.displayName;
        this.getUserBooks();
      }
    });
  }

  public getUserBooks() {
    this.checkoutService.getCartBooks().subscribe((data) => {
      let books =[];
      data.forEach(item => {
        books.push(item.payload.doc.data()); 
      });
      this.books = this.filterUserBooks(books);
      this.isBooks = true;
    });
  }

  public filterUserBooks(books) {
    return books.filter(book => {
      return book.cartUserId == this.useremail;
    });
  }
}
