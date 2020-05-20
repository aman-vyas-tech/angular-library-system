import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookWishlistService {
  constructor(private firestore: AngularFirestore) { }

  public addToWishlist(book) {
    return of(this.firestore.collection('wishlist').doc(book.isbn).set(book));
  }

  public getAllWishList() {
    return this.firestore.collection('wishlist').snapshotChanges();
  }

}
