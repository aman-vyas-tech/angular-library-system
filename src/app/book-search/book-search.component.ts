import { Subscription } from "rxjs";
import { BookDataService } from "./../services/books/book-data.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Book } from "../book";

@Component({
  selector: "app-book-search",
  templateUrl: "./book-search.component.html",
  styleUrls: ["./book-search.component.css"],
})
export class BookSearchComponent implements OnInit {
  searchForm: FormGroup;
  filteredBooks: Book[];
  books: Book[];
  bookSubscription: Subscription;
  constructor(
    private fb: FormBuilder,
    private bookDataService: BookDataService
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchKey: new FormControl(""),
    });

    this.bookSubscription = this.bookDataService
      .getBooks()
      .subscribe((books) => {
        const data: any = books[0].payload.doc.data();
        console.log(data);
        this.books = data.books;
      });
  }

  onSearch() {
    const keyword = this.searchForm.get("searchKey").value;
    this.books = this.books.filter((book) => {
      return book.title.indexOf(keyword) > -1;
    });
    console.log(this.books, this.books.length);
  }
}
