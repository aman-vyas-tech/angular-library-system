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
  books: Book[];
  bookSubscription: Subscription;
  constructor(private bookDataService: BookDataService) { }

  ngOnInit() {
    this.bookSubscription = this.bookDataService.getBooks().subscribe(books => {
      this.books = books;
      this.books = this.books.splice(0,6);
    });
  }

}
