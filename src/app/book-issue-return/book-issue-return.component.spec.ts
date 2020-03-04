import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIssueReturnComponent } from './book-issue-return.component';

describe('BookIssueReturnComponent', () => {
  let component: BookIssueReturnComponent;
  let fixture: ComponentFixture<BookIssueReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookIssueReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookIssueReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
