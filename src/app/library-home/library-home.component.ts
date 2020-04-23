import { UserService } from './../auth/user.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-library-home',
  templateUrl: './library-home.component.html',
  styleUrls: ['./library-home.component.css']
})
export class LibraryHomeComponent implements OnInit {
  loading: boolean;
  users: unknown;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
