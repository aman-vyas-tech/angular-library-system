import { Observable, from, of } from 'rxjs';
import { Book } from 'src/app/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookWishlistService {
  public wishList: Book[] =[];
  constructor() { }

  public addToWishlist(book: Book): Observable<Book[]> {
    this.wishList.push(book);
    return of(this.wishList);
  }

  public getWishList(): Observable<Book[]> {
    return of(this.wishList);
  }
}
