import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { CheckoutService } from './../services/checkout.service';
import { Book } from 'src/app/book';
import { BookDataService } from './../services/books/book-data.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css']
})
export class BookCartComponent implements OnInit {
  book: Book;
  checkoutForm: FormGroup;
  user: User;
  bookDetailsSubscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute,
              private bookDataService: BookDataService,
              private fb : FormBuilder,
              private auth: AngularFireAuth,
              private firestore: AngularFirestore,
              private checkoutService: CheckoutService,
              private router: Router) {  }

  ngOnInit() {
    this.auth.authState.subscribe(user => {
      this.user = user;
    })
    this.getCartBooks();
    this.checkoutForm = this.fb.group({
      username: new FormControl('', Validators.required),
      issuedTillDate: new FormControl('', Validators.required)
    });
    this.bookDetailsSubscription = this.activatedRoute.queryParams.subscribe(
      (item) => {
        this.bookDataService.getBooks().subscribe((books) => {
          this.book = this.bookDataService.getBook(books, item)[0];
          this.addToCartBooks(this.book);
        });
      }
    );
  }

  getCartBooks() {
    this.checkoutService.getCartBooks().subscribe(data => {
      console.log(data);
    });
  }

  get formControls() {
    return this.checkoutForm.controls;
  }

  addToCartBooks(book) {
    const data = {
      userId: this.user.uid,
      book: book
    }
    this.checkoutService.addtoCart(data).subscribe(data => {
      console.log(data);
    }); 
  }

  checkoutBooks(book, user) {
    book.issuedTo = this.checkoutForm.get('username').value;
    book.issuedTillDate = this.checkoutForm.get('issuedTillDate').value;
    book.count = book.count-1;
    this.checkoutService.checkoutBook(book).subscribe(
      res => {
        this.router.navigate(['/confirm'],{ state: {...book}});
        console.log('Book Added to Checkout', res);
      },
      error => {
        console.log('Error Occured while checkout',error);
      }
    )
  }

}
