import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input('book') book: Book;
  constructor() { }

  ngOnInit() {

  }

  public trimTitle(title){
    if(title && title.length > 30) {
      return title.substr(0, 30)
    } else {
      return title;
    }
  }
}
