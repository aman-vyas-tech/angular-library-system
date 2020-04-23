import { BookDataService } from './../services/books/book-data.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  searchForm : FormGroup;
  filteredBooks : Book[];
  books: Book[];
  constructor(private fb : FormBuilder, private bookdataService: BookDataService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchKey: new FormControl('', Validators.required)
    })
  }

  onSearch() {
    const keyword = this.searchForm.get('searchKey').value;
    this.bookdataService.getBooks().subscribe(books => {
      this.books = books;
      console.log(this.books.length, keyword);
      this.books =  this.books.filter(book => {
        return book.title.indexOf(keyword) > -1;
      });
      console.log(this.books, this.books.length);
    })
  }

}
