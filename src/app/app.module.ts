import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForumsComponent } from './forums/forums.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './login.service';
import { TokenInterceptor } from './token.interceptor';

import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FavoritesService } from './favorites.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForumsComponent,
    HomepageComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // TN

  ],
  providers: [
    LoginService,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    FavoritesService,
    RegisterService,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
