import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBooksComponent } from './feature-books.component';

describe('FeatureBooksComponent', () => {
  let component: FeatureBooksComponent;
  let fixture: ComponentFixture<FeatureBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
