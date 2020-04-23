import { TestBed } from '@angular/core/testing';

import { BookWishlistService } from './book-wishlist.service';

describe('BookWishlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookWishlistService = TestBed.get(BookWishlistService);
    expect(service).toBeTruthy();
  });
});
