import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../favorites.service';
@Component({
  selector: 'mb-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router: Router, private favService: FavoritesService) { }
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
    submitProf(){
      this.router.navigate(['profile']);
    }
}
