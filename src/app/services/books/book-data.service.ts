import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap, concatMap, map, flatMap } from 'rxjs/operators';
import { Book } from 'src/app/book';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    const url = 'assets/configurations/books.json';
    return this.http.get<Book[]>(url);
  }

  getBook(item): Observable<Book[]> {
    const url = 'assets/configurations/books.json';
    return this.http.get<Book[]>(url).pipe(
    map((books: Book[]) => {
      return books.filter( book =>  {
        return book.isbn == +item.id;
      })
    })
    )
  }
}
