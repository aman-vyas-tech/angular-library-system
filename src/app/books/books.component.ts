import { BookDataService } from './../services/books/book-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input('books') books: Book[];
  bookSubscription: Subscription;
  fewbooks: Book[];
  constructor(private bookDataService: BookDataService) { }

  ngOnInit() {
    this.getBooksData();
  }

  public getBooksData() {
    this.bookSubscription = this.bookDataService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  ngoNDestroy() {
    this.bookSubscription.unsubscribe();
  }

}
