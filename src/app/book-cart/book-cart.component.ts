import { Subscription } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";
import { CheckoutService } from "./../services/checkout.service";
import { BookDataService } from "./../services/books/book-data.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-book-cart",
  templateUrl: "./book-cart.component.html",
  styleUrls: ["./book-cart.component.css"],
})
export class BookCartComponent implements OnInit {
  books = [];
  cartResponse = [];
  checkoutForm: FormGroup;
  user: string;
  bookDetailsSubscription: Subscription;
  minDate = new Date();
  constructor(
    private bookDataService: BookDataService,
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.authState.subscribe((user) => {
      this.user = user.email;
    });
    this.getCartBooks();
    this.checkoutForm = this.fb.group({
      issuedTillDate: new FormControl("", Validators.required),
    });
  }

  getCartBooks() {
    this.checkoutService.getCartBooks().subscribe((data) => {
      if (data && data.length > 0) {
        this.cartResponse = data;
        this.cartResponse.forEach((item) => {
          this.getCartBook(item);
        });
      } else {
        return;
      }
    });
  }

  get formControls() {
    return this.checkoutForm.controls;
  }

  getCartBook(data) {
    let book = data.payload.doc.data() as any;
    if (book && this.user && book.user === this.user) {
      this.bookDataService.getBook(book).subscribe((book) => {
        this.books.push(book.data());
      });
    }
  }

  checkoutBooks(books) {
    books.forEach((book) => {
      book.issuedTo = this.user;
      book.issuedTillDate = this.checkoutForm.get("issuedTillDate").value;
      book.count = book.count - 1;
    });
    this.checkoutService.checkoutBook(books).subscribe(
      (res) => {
        this.router.navigate(["/confirm"], { state: { ...books } });
        console.log("Book Added to Checkout", res);
        this.checkoutService.clearCart(books);
      },
      (error) => {
        console.log("Error Occured while checkout", error);
      }
    );
  }
}
