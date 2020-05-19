import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from '../book';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  issuedBooks: Book[] = [];
  checkoutBooks: Book[] = [];
  user: string;
  constructor(private firestore: AngularFirestore,
              private fireAuth: AngularFireAuth) {
      this.fireAuth.authState.subscribe(user => {
        this.user = user.email;
      })
   }

  addtoCart(data) {
    return of(this.firestore.collection('bookcart').doc(data.isbn).set(data));
  }

  getCartBooks() {
    return this.firestore.collection('bookcart').snapshotChanges();
  }

  checkoutBook(books): Observable<any> {
    let data;
    return of(books.forEach(book => {
      data = {
        issuedTo: book.issuedTo,
        isbn : book.isbn
      }
      this.firestore.collection('checkoutBooks').doc(book.isbn).set(data);
      this.firestore.collection('books').doc(book.isbn).update({
        count: book.count,
        issuedTo: this.user
      })
    }));
  }

  getCheckoutBooks() {
    return this.firestore.collection('checkoutBooks').snapshotChanges();
  }

  clearCart(books) {
     return of(books.forEach(item => {
        this.firestore.collection('bookcart').doc(item.isbn).delete();
      }));
  }
}
