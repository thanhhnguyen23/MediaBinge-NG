import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import{ Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class FavoritesService {

  constructor(private http: HttpClient,private router: Router) {
    console.log('http & router constructed!');
   }
  firstname:string = localStorage.getItem('firstName');

  // myMovies = ["Empire Strikes Back","Inception","Lord of the Rings","The Godfather", "Airplane!"];
  // myShows = ["The Wire", "Seinfeild", "Parks and Recreation", "Breaking Bad", "Avatar the Last Airbender"];
  // myBooks = [ "One Flew Over the Cuckoo's Nest", "The Things they Carried", "Catch 22", "1984"];
  // declaring structures for movies, tvShows, and books
  myMovies: string[];
  myShows: string[];
  myBooks: string[];

  id: any = localStorage.getItem('userId');

  getProfile(): Observable<any>{
    console.log('hi');
    return this.http.get(`http://mediabingeeb-env-1.2dmqmp7wnb.us-east-1.elasticbeanstalk.com/profile/user`)
    // http://mediabingeeb-env-1.2dmqmp7wnb.us-east-1.elasticbeanstalk.com/login


  }
  editMyProfile(myProf):Observable<any>{
    console.log('Hi');
    console.log(myProf);
    return this.http.get('http://localhost:8080/MediaBinge/profile',myProf);
  }




  }
