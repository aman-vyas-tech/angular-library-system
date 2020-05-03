import { BookDataService } from './../services/books/book-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Input('books') books: Book[];
  constructor(private bookDataService: BookDataService) { }
}
