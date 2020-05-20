import { BookWishlistService } from './../services/book-wishlist.service';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit{
  @Input('book') book: Book;
  public user: any;
  constructor(private router: Router,
              private authFire: AngularFireAuth,
              private wishlistService: BookWishlistService) { }

  ngOnInit() {
    this.authFire.authState.subscribe(user => {
      this.user = user.email;
    })
  }

  public trimTitle(title){
    if(title && title.length > 30) {
      return title.substr(0, 30)
    } else {
      return title;
    }
  }

  public addToWishList(book) {
    let data = {
      isbn: book.isbn,
      user: this.user,
    };
    this.wishlistService.addToWishlist(data).subscribe((res) => {
      console.log(res);
      this.router.navigate(['wishlist']);
    });
  }
}
