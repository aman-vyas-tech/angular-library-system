import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  issuedBooks: Book[] = [];
  checkoutBooks: Book[] = [];
  constructor(private http: HttpClient) { }

  addtoCart(book): Observable<Book[]> {
    this.issuedBooks.push(book);
    return of(this.issuedBooks);
    //TODO:  call addtoCart backend service
    console.log('Issued Books:', this.issuedBooks);
  }

  checkoutBook(book): Observable<Book[]>{
    this.checkoutBooks.push(book);
    return of(this.checkoutBooks);
    console.log('Checkout Books', this.checkoutBooks);
  }
}
