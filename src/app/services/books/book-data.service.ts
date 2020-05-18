import { Book } from "src/app/book";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class BookDataService {
  books = [];
  constructor(private http: HttpClient, private firebase: AngularFirestore) {
  }

  getBooks() {
    return this.firebase.collection("books").snapshotChanges();
  }

  getBook(id) {
    return this.firebase.collection('books').doc(id).get();
  }

  public filterBooks(bookData, item) {
    return bookData.filter((book) => {
      return book.isbn == item.id;
    });
  }

  addBooks() {
    fetch("./../../../assets/configurations/books.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        data.forEach((book) => {
          this.firebase.collection("books").doc(book.isbn).set(book);
        });
      });
  }

  addBook(book) {
    return this.firebase.collection("books").doc(book.isbn).set(book);
  }

  removeBook(book) {
    return this.firebase.collection('books').doc(book.isbn).delete();
  }

  updateBook(book) {
    return this.firebase.collection('books').doc(book.isbn).update({});
  }
}
