import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForumsComponent } from './forums/forums.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';// TN

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForumsComponent,
    HomepageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // TN

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
