import { Book } from 'src/app/book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient,
    private firebase: AngularFirestore) {
     }

  getBooks() {
    return this.firebase.collection('books').snapshotChanges();
   }
  

  public filterBooks(bookData, item) {
    return bookData.filter((book) => {
      return book.isbn == item.id;
    });
  }

  addBooks() {
    this.getBooks().subscribe(books => {
      const data = {
        books: books
      }
      return this.firebase.collection('books').add(data);
    });
  }
}
