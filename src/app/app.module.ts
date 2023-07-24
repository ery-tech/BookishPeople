import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './components/books/books.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BooksComponent,
    LoaderComponent,
    ScrollToTopComponent,

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [


    { provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true}],


  bootstrap: [AppComponent]
})
export class AppModule { }
