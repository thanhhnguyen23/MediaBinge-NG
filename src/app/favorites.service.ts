import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {

  constructor() { }
  firstname:string = "Abe";
  myMovies = ["Empire Strikes Back","Inception","Lord of the Rings","The Godfather", "Airplane!"];
  myShows = ["The Wire", "Seinfeild", "Parks and Recreation", "Breaking Bad", "Avatar the Last Airbender"];
  myBooks = [ "One Flew Over the Cuckoo's Nest", "The Things they Carried", "Catch 22", "1984"];
  
  
}
