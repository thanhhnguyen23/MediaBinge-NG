import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from '../favorites.service';
@Component({
  selector: 'mb-books-profile',
  templateUrl: './books-profile.component.html',
  styleUrls: ['./books-profile.component.css']
})
export class BooksProfileComponent implements OnInit {
@Input() username;
  userBooks: Array<string> = [];
  public dropdown = true;
  constructor(private favService: FavoritesService) { }

  ngOnInit() {
    this.getUserProfile(this.username);
  }
 

  getUserProfile(username:string){
   
    this.favService.getUserProfile(username).subscribe( (data) =>{
      console.log(data);
      if(data.favoriteBooks){
        this.userBooks.push(data.favoriteBooks);
      }else{
        this.userBooks.push("This user hasn't added any favorite books");
      }
      
    })
  }
}
