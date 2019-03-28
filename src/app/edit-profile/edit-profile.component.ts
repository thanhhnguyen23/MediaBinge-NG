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
  movies:String[] = ["","","","",""];
  shows:String[] =  ["","","","",""];
  books:String[] =  ["","","","",""];
  newMovies:String[];
  newShows:String[];
  newBooks:String[];
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
      
       this.newMovies= data.favoriteMovies.split(',');
       for(let i = 0; i< this.newMovies.length; i++)
       {
         this.movies[i] = this.newMovies[i];
       }
    }
    if (data.favoriteBooks != null) {
      this.newBooks= data.favoriteBooks.split(',');
       for(let i = 0; i< this.newBooks.length; i++)
       {
         this.books[i] = this.newBooks[i];
       }
    }
    if (data.favoriteTvShows != null) {
      this.newShows= data.favoriteTvShows.split(',');
       for(let i = 0; i< this.newShows.length; i++)
       {
         this.shows[i] = this.newShows[i];
       }
    }

    console.log('movies: ', this.movies);
    console.log('books: ', this.books);
    console.log('shows: ', this.shows);

  })
}

editProfile(movie0: string, movie1: string, movie2: string, movie3: string, movie4: string, shows0: string, shows1: string, shows2: string, shows3: string, shows4: string, books0: string, books1: string, books2: string, books3: string, books4: string)
{

  let myFavMovies:String = movie0+","+movie1+","+movie2+","+movie3+","+movie4;
  let myFavShows:String = shows0+","+shows1+","+shows2+","+shows3+","+shows4;
  let myFavBooks:String = books0+","+books1+","+books2+","+books3+","+books4;


  let updatedProfile =  new Profile(myFavMovies,myFavBooks,myFavShows);
}
    submitProf(){
      this.router.navigate(['profile']);
    }
}
