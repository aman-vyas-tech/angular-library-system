import { Book } from "src/app/book";
import { CheckoutService } from "./../services/checkout.service";
import { BookWishlistService } from "./../services/book-wishlist.service";
import { Subscription } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { BookDataService } from "../services/books/book-data.service";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"],
})
export class BookDetailsComponent implements OnInit {
  book = {};
  bookDetailsSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookDataService: BookDataService,
    private wishlistService: BookWishlistService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit() {
    this.bookDetailsSubscription = this.activatedRoute.params.subscribe(
      (item) => {
        this.bookDataService.getBooks().subscribe((books) => {
          this.book = this.getBook(books, item)[0];
        });
      }
    );
  }

  public getBook(books, item) {
    const data: any = books[0].payload.doc.data();
    return data.books.filter((book) => {
      console.log(book.isbn == +item.id);
      return book.isbn == +item.id;
    });
  }

  public addtoWishList(book) {
    book.wishlist = true;
    this.wishlistService.addToWishlist(book).subscribe(
      (res) => {
        console.log("Book added to wishlist", res);
      },
      (error) => {
        console.log("Erro Occured While adding to wishlist");
      }
    );
  }

  public addToCart(book, user = "admin") {
    book.issued = true;
    book.issuedTo = user;
    this.checkoutService.addtoCart(book);
    this.router.navigate(["/cart"], { queryParams: { id: book.isbn } });
  }

  ngOnDestroy() {
    this.bookDetailsSubscription.unsubscribe();
  }
}
