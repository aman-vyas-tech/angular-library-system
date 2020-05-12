import { AngularFirestore } from '@angular/fire/firestore';
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
  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  addtoCart(data) {
    return of(this.firestore.collection('bookcart').add(data));
  }

  getCartBooks() {
    return this.firestore.collection('bookcart').snapshotChanges();
  }

  checkoutBook(books): Observable<any> {
    return of(books.forEach(book => {
      this.firestore.collection('checkoutBooks').add(book);
    }));
  }

  getCheckoutBooks() {
    this.firestore.collection('checkoutBooks').snapshotChanges();
  }

  clearBookCart() {
    this.firestore.collection('bookcart').doc().delete();
  }
}
