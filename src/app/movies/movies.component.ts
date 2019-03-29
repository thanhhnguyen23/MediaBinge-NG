import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';
import { Post } from 'src/app/models/Post';
import { User } from '../models/User'
import { toDate, isoStringToDate } from '@angular/common/src/i18n/format_date';
import { Profile } from '../models/Profile';
import { FavoritesService } from '../favorites.service';
import { stringify } from 'querystring';

@Component({
  selector: 'mb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {
  constructor(private posts: PostService, private favService: FavoritesService) { }

  ngOnInit() {
    this.getPosts();
    
  }
  //get post from post service
  allPost: Array<Post> = [];
  postUsers: Array<User> = [];
  
  
 
  getPosts() {
    this.posts.getMoviePosts().subscribe( (data) => {
      //converting data to Post model and adding to all post array
      for(let i = 0; i < data.length; i++){
        console.log("Data in get POsts"+data);
        console.log(data[i]);
        let temp: Post;
        let userTemp:User;
        temp = data[i];
        userTemp = data[i].user;
        console.log("User temp: "+ userTemp.username);
        
        console.log(userTemp);
        console.log(temp);
        // let time: Date = data[i].datePosted.toLocaleTimeString();
      //  console.log(time);
        this.allPost.push(temp);
        this.postUsers.push(userTemp);
        
        
      }
      
      console.log("allPost" + this.allPost)
      
    });
  }
}
  
