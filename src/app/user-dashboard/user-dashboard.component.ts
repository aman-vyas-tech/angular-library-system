import { BookDataService } from './../services/books/book-data.service';
import { CheckoutService } from "./../services/checkout.service";
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Book } from '../book';

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent implements OnInit {
  public isBooks = false;
  books = [];
  useremail: string;
  username: string;
  constructor(
    private checkoutService: CheckoutService,
    private authFire: AngularFireAuth,
    private bookDataService: BookDataService
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
    this.checkoutService.getCheckoutBooks().subscribe((data) => {
      if(data && data.length > 0 ) {
        data.forEach(item => {
          let book = item.payload.doc.data() as Book;
          if(this.useremail === book.issuedTo) {
            this.bookDataService.getBook(book).subscribe(data => {
              this.books.push(data.data());
            })
          }
       });
       this.isBooks = true;
      }
    });
  }

  public filterUserBooks(books) {
    return books.filter(book => {
      return book.issuedTo == this.useremail;
    });
  }
}
