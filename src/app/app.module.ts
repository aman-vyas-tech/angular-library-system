import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryHomeComponent } from './library-home/library-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LibHeaderComponent } from './lib-header/lib-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BooksComponent } from './books/books.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookIssueReturnComponent } from './book-issue-return/book-issue-return.component';
import { BookCartComponent } from './book-cart/book-cart.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryHomeComponent,
    PageNotFoundComponent,
    LibHeaderComponent,
    UserDetailsComponent,
    BookSearchComponent,
    BooksComponent,
    BookItemComponent,
    BookDetailsComponent,
    BookIssueReturnComponent,
    BookCartComponent,
    SuccessComponent,
    LoginComponent,
    ManagerComponent,
    BooksManagementComponent,
    AddBookComponent,
    SidenavComponent,
    UserDashboardComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
