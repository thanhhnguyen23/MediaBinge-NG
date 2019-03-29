import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from '../favorites.service';
@Component({
  selector: 'mb-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.css']
})
export class MovieProfileComponent implements OnInit {
@Input() username;
  userMovies: Array<string> = [];
  userShows: Array<string> = [];
  public dropdown = true;
  constructor(private favService: FavoritesService) { }

  ngOnInit() {
    this.getUserProfile(this.username);
  }
 

  getUserProfile(username:string){
   
    this.favService.getUserProfile(username).subscribe( (data) =>{
      console.log(data);
      this.userMovies.push(data.favoriteMovies);
      this.userShows.push(data.favoriteShows);
    })
  }
}
