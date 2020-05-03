import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Book } from 'src/app/book';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient,
    private firebase: AngularFirestore) {
     }

  // getBooks(): Observable<Book[]> {
  //   const url = 'assets/configurations/books.json';
  //   return this.http.get<Book[]>(url);
  // }

  getBooks() {
    return this.firebase.collection('books').snapshotChanges();
   }

  // getBook(item) {
  //  return this.getBooks();
  //    );
    

    // (
    //   map((books: Book[]) => {
    //     return books.filter( book =>  {
    //       return book.isbn == +item.id;
    //     })
    //   })
  

  addBooks() {
    this.getBooks().subscribe(books => {
      const data = {
        books: books
      }
      return this.firebase.collection('books').add(data);
    });
  }
}
