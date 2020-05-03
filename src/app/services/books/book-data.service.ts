import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/book';
import { AngularFirestore } from '@angular/fire/firestore';

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

  getBook(books, item) {
    const data: any = books[0].payload.doc.data();
    return data.books.filter((book) => {
      console.log(book.isbn == +item.id);
      return book.isbn == +item.id;
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
