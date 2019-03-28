import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ForumsComponent } from './forums/forums.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MoviesComponent } from './movies/movies.component';
import { BooksComponent } from './books/books.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreatePostComponent } from './create-post/create-post.component';
import{ RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'forums', component: ForumsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'forums/movies', component: MoviesComponent},
  {path: 'forums/books', component: BooksComponent},
  {path:'editProfile', component: EditProfileComponent},
  {path: 'forums/post', component: CreatePostComponent},
  {path:'register', component: RegisterComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
