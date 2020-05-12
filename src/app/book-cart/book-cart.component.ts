import { Books } from "./../books";
import { Subscription } from "rxjs";
import { User } from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { CheckoutService } from "./../services/checkout.service";
import { BookDataService } from "./../services/books/book-data.service";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
  checkoutForm: FormGroup;
  user: User;
  bookDetailsSubscription: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookDataService: BookDataService,
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.authState.subscribe((user) => {
      this.user = user;
    });
    this.getCartBooks();
    this.checkoutForm = this.fb.group({
      issuedTillDate: new FormControl("", Validators.required),
    });
  }

  getCartBooks() {
    this.checkoutService.getCartBooks().subscribe((data) => {
      data.forEach((item) => {
        this.books.push(item.payload.doc.data());
      });
    });
  }

  get formControls() {
    return this.checkoutForm.controls;
  }

  checkoutBooks(books) {
    books.forEach((book) => {
      book.issuedTo = this.user.email;
      book.issuedTillDate = this.checkoutForm.get("issuedTillDate").value;
      book.count = book.count - 1;
    });
    this.checkoutService.checkoutBook(books).subscribe(
        (res) => {
          this.router.navigate(["/confirm"], { state: { ...books } });
          console.log("Book Added to Checkout", res);
          // this.checkoutService.clearBookCart();
        },
        (error) => {
          console.log("Error Occured while checkout", error);
        }
      );
  }
}
