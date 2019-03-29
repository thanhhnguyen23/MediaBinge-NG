import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { Profile } from '../models/Profile';
import { partialProf } from '../models/partialProf';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map, catchError, first } from 'rxjs/operators';
@Component({
  selector: 'mb-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router: Router, private favService: FavoritesService, private http: HttpClient) { }
  firstname = localStorage.getItem('firstName');
  myProfile: Profile;
  movies: String[] = ["", "", "", "", ""];
  shows: String[] = ["", "", "", "", ""];
  books: String[] = ["", "", "", "", ""];
  newMovies: String[];
  newShows: String[];
  newBooks: String[];
  isClicked = false;
  profileUrl = 'http://mediabingeeb-env-1.2dmqmp7wnb.us-east-1.elasticbeanstalk.com/profile';
  // profileUrl = 'http://localhost:8080/MediaBinge/profile';
  ngOnInit() {
    this.getProfile();
    if (!localStorage.getItem('mb-jwt')) {
      this.router.navigate(['/login']);
    }
    this.getProfile();
  }

  getProfile() {
    this.favService.getProfile().subscribe((data) => {
      console.log('getProfile() method');
      console.log('data: ', data);
      this.myProfile = data;

      if (data.favoriteMovies != null) {

        this.newMovies = data.favoriteMovies.split(',');
        for (let i = 0; i < this.newMovies.length; i++) {
          this.movies[i] = this.newMovies[i];
        }
      }
      if (data.favoriteBooks != null) {
        this.newBooks = data.favoriteBooks.split(',');
        for (let i = 0; i < this.newBooks.length; i++) {
          this.books[i] = this.newBooks[i];
        }
      }
      if (data.favoriteTvShows != null) {
        this.newShows = data.favoriteTvShows.split(',');
        for (let i = 0; i < this.newShows.length; i++) {
          this.shows[i] = this.newShows[i];
        }
      }

      console.log('movies: ', this.movies);
      console.log('books: ', this.books);
      console.log('shows: ', this.shows);

<<<<<<< HEAD
    })
  }

  editProfile(movie0: string, movie1: string, movie2: string, movie3: string, movie4: string, shows0: string, shows1: string, shows2: string, shows3: string, shows4: string, books0: string, books1: string, books2: string, books3: string, books4: string) {
=======
editProfile(movie0: string, movie1: string, movie2: string, movie3: string, movie4: string, shows0: string, shows1: string, shows2: string, shows3: string, shows4: string, books0: string, books1: string, books2: string, books3: string, books4: string)
{
  this.isClicked = true;
  let myFavMovies:string = movie0+","+movie1+","+movie2+","+movie3+","+movie4;
  let myFavShows:string = shows0+","+shows1+","+shows2+","+shows3+","+shows4;
  let myFavBooks:string = books0+","+books1+","+books2+","+books3+","+books4;
>>>>>>> 24acaf79a00df7ad6a64c7c20356b988fca16dae

    let myFavMovies: string = movie0 + "," + movie1 + "," + movie2 + "," + movie3 + "," + movie4;
    let myFavShows: string = shows0 + "," + shows1 + "," + shows2 + "," + shows3 + "," + shows4;
    let myFavBooks: string = books0 + "," + books1 + "," + books2 + "," + books3 + "," + books4;


    let updatedProfile = new partialProf(this.myProfile.profileId, myFavMovies, myFavBooks, myFavShows);
    let partialProfJson = JSON.stringify(updatedProfile)
    console.log(partialProfJson);
    this.http.patch('http://localhost:8080/MediaBinge/profile', partialProfJson, { responseType: 'json', observe: 'response' })
      .pipe(map(resp => {
        console.log(resp);
        if (199 < resp.status && resp.status < 300) {
          this.router.navigate(['/profile']);
        }
      })).subscribe();
    //  this.favService.editMyProfile(partialProfJson).subscribe((data)=>{
    //    console.log(data);
    //    if(data != undefined)
    //    {
    //      this.submitProf;
    //    }
    //  })

  }
  submitProf() {
    this.router.navigate(['profile']);
  }
}
