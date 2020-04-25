import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth/auth.guard';
import { BookCartComponent } from './book-cart/book-cart.component';
import { BookWishlistComponent } from './book-wishlist/book-wishlist.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryHomeComponent } from './library-home/library-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'callback', component: CallbackComponent },
  { path: '', canActivate: [AuthGuard], children: [
  { path: 'home',   component: LibraryHomeComponent,  canActivate: [AuthGuard]},
  { path: 'search', component: BookSearchComponent }, 
  { path: 'wishlist', component: BookWishlistComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'cart', component: BookCartComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'confirm', component: OrderConfirmComponent },
  { path: 'login',  redirectTo: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
  ]}
];
// routes.forEach(route => {
//   route.canActivate.push([AuthGuard]);
// });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
