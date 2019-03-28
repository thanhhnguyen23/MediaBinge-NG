import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForumsComponent } from './forums/forums.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CollapseBasicComponent } from './collapse-basic/collapse-basic.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './login.service';
import { TokenInterceptor } from './token.interceptor';

import { ProfileComponent } from './profile/profile.component';
import { MoviesComponent } from './movies/movies.component';
import { BooksComponent } from './books/books.component';
import { PostService } from './services/PostService';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FavoritesService } from './favorites.service';
import { ResponseService } from './services/response.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForumsComponent,
    HomepageComponent,
    LoginComponent,
    ProfileComponent,
    MoviesComponent,
    BooksComponent,
    EditProfileComponent,
    CollapseBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    LoginService,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    FavoritesService,
    PostService,
    ResponseService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
