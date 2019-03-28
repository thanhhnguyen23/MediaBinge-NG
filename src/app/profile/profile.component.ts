import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Profile } from '../models/Profile';

@Component({
  selector: 'mb-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private favService: FavoritesService) { }
  firstname
  movies;
  shows;
  books;
  ngOnInit() {
    this.getProfile();

    this.movies = this.favService.myMovies;
    this.shows = this.favService.myShows;
    this.books = this.favService.myBooks;
    this.firstname = this.favService.firstname;
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

}
