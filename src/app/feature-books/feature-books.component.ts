import { Book } from 'src/app/book';
import { Subscription } from 'rxjs';
import { BookDataService } from './../services/books/book-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-books',
  templateUrl: './feature-books.component.html',
  styleUrls: ['./feature-books.component.css']
})
export class FeatureBooksComponent implements OnInit {
  books = [];
  bookSubscription: Subscription;
  constructor(private bookDataService: BookDataService) { }

  ngOnInit() {
   this.getAllBooks();
  }

  getAllBooks() {
    this.bookSubscription = this.bookDataService
    .getBooks()
    .subscribe((books) => {
      books = books.splice(0,6);
      books.forEach((data) => {
        console.log(data.payload.doc.data());
        this.books.push(data.payload.doc.data() as Book);
      });
    });
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }
}
