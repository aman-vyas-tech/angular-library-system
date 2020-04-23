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
  constructor(private activatedRouter: ActivatedRoute,
              private bookDataService: BookDataService,
              private fb : FormBuilder,
              private checkoutService: CheckoutService,
              private router: Router) {  }

  ngOnInit() {
    this.getCartBooks();
    this.checkoutForm = this.fb.group({
      username: new FormControl('', Validators.required),
      issuedTillDate: new FormControl('', Validators.required)
    });
  }

  getCartBooks() {
    // TODO: To be used with API
    // this.activatedRouter.queryParams.subscribe(param => {
    //   this.book = param.book;
    //   // this.bookDataService.getBook(item).subscribe(book => {
    //   //   this.book = book;
    //   // });
    // });
    this.book = this.checkoutService.issuedBooks[0];
    console.log('Cart Book', this.book);
  }

  get formControls() {
    return this.checkoutForm.controls;
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
