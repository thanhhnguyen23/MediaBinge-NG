import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { Profile } from '../models/Profile';
@Component({
  selector: 'mb-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router: Router, private favService: FavoritesService) { }
  firstname = localStorage.getItem('firstName');
  movies:String[];
  shows:String[];
  books:String[];
 ngOnInit() {
   this.getProfile();
 }

 getProfile() {
  this.favService.getProfile().subscribe((data) => {
    console.log('getProfile() method');
    console.log('data: ', data);
    let myProfile: Profile;
    myProfile = data;

    if (data.favoriteMovies != null) {
      
      this.movies = data.favoriteMovies.split(',');
    }
    if (data.favoriteBooks != null) {
      this.books = data.favoriteBooks.split(',');
    }
    if (data.favoriteTvShows != null) {
      this.shows = data.favoriteTvShows.split(',');
    }

    console.log('movies: ', this.movies);
    console.log('books: ', this.books);
    console.log('shows: ', this.shows);

  })
}
    submitProf(){
      this.router.navigate(['profile']);
    }
}
