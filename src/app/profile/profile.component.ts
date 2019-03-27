import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

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
    this.movies = this.favService.myMovies;
    this.shows = this.favService.myShows;
    this.books = this.favService.myBooks;
    this.firstname = this.favService.firstname;
  }
  
}
