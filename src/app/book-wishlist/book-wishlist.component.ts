import { Subscription } from 'rxjs';
import { BookWishlistService } from './../services/book-wishlist.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-wishlist',
  templateUrl: './book-wishlist.component.html',
  styleUrls: ['./book-wishlist.component.css']
})
export class BookWishlistComponent implements OnInit {
  wishListBooks: Book[];
  subscription: Subscription;
  constructor(private wishlistService: BookWishlistService) { }

  ngOnInit() {
    this.subscription = this.wishlistService.getWishList().subscribe(books => {
    this.wishListBooks = books;
    });
  }

}
