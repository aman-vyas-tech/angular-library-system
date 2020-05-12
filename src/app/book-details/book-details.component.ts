import { Book } from "src/app/book";
import { CheckoutService } from "./../services/checkout.service";
import { BookWishlistService } from "./../services/book-wishlist.service";
import { Subscription } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { BookDataService } from "../services/books/book-data.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"],
})
export class BookDetailsComponent implements OnInit {
  book = {};
  bookDetailsSubscription: Subscription;
  user: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookDataService: BookDataService,
    private wishlistService: BookWishlistService,
    private checkoutService: CheckoutService,
    private authFire: AngularFireAuth
  ) {}

  ngOnInit() {
    this.getBook();
    this.authFire.authState.subscribe(user => {
      this.user = user.email;
    })
  }

  public getBook() {
    this.bookDetailsSubscription = this.activatedRoute.params.subscribe(
      (item) => {
        this.bookDataService.getBooks().subscribe(data => {
          let books = data[0].payload.doc.data() as any;
          this.book = this.bookDataService.filterBooks(books.books, item)[0];
        });
      }
    );
  }

  public addtoWishList(book) {
    book.wishlist = true;
    this.wishlistService.addToWishlist(book).subscribe(
      (res) => {
        console.log("Book added to wishlist", res);
      },
      (error) => {
        console.log("Erro Occured While adding to wishlist",error);
      }
    );
  }

  public addToCart(book) {
    book.cartUserId = this.user;
    this.checkoutService.addtoCart(book);
    this.router.navigate(["/cart"]);
  }

  ngOnDestroy() {
    this.bookDetailsSubscription.unsubscribe();
  }
}
