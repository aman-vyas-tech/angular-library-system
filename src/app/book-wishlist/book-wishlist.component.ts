import { BookDataService } from './../services/books/book-data.service';
import { Subscription } from 'rxjs';
import { BookWishlistService } from './../services/book-wishlist.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-book-wishlist',
  templateUrl: './book-wishlist.component.html',
  styleUrls: ['./book-wishlist.component.css']
})
export class BookWishlistComponent implements OnInit {
  userWishList =[];
  subscription: Subscription;
  user: any;
  constructor(private wishlistService: BookWishlistService,
    private bookDataServive: BookDataService,
              private fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.fireAuth.authState.subscribe(user => {
      this.user = user;
    })
    this.subscription = this.wishlistService.getAllWishList().subscribe(list => {
      list.forEach(item => {
        let book = item.payload.doc.data() as Book;
        this.bookDataServive.getBook(book.isbn).subscribe(book => {
          this.userWishList.push(book.data());
        })
      })
    });
  }

  public getUserWishlist(list) {
    return list.filter(item => {
      return this.user.email === item.user;
    })
  }
}
