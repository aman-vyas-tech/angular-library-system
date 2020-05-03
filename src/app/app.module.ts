// Auht Guards
import { AuthGuard } from './auth/auth.guard';

// Services
import { AuthService } from './auth/auth.service';

// App Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, 
         MatFormFieldModule,
         MatCardModule,
         MatButtonModule,
         MatGridListModule,
         MatDividerModule,
         MatListModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatToolbarModule, 
         MatIconModule,
         MatMenuModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// App Components
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
import { FeatureBooksComponent } from './feature-books/feature-books.component';
import { BookWishlistComponent } from './book-wishlist/book-wishlist.component';
import { CallbackComponent } from './callback/callback.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
    ContactComponent,
    FeatureBooksComponent,
    BookWishlistComponent,
    CallbackComponent,
    OrderConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-firestore'),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
