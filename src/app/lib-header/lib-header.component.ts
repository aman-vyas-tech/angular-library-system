import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lib-header',
  templateUrl: './lib-header.component.html',
  styleUrls: ['./lib-header.component.css']
})
export class LibHeaderComponent implements OnInit {
  public selectedItem: any;
  public title = 'Angular Library Management System';
  constructor() { }

  ngOnInit() {
  }

}
