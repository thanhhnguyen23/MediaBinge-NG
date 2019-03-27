import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';
import { Post } from 'src/models/Post';

@Component({
  selector: 'mb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
  // providers: [PostService]
})


export class MoviesComponent implements OnInit {
  text: string;
 
  current: Post;
  datePost: string;

  constructor(private posts: PostService) { }

  ngOnInit() {
    this.getPosts();
  }
  //get post from post service
  allPost: Post[] = [
    {
      id: 4,
      text: "wokka wokka wokka",
      topic: "movie/tv",
      userId: 3,
      datePosted: '5/12/12 5:00pm'
    },
    {
      id: 5,
      text: "lalallalala",
      topic: "movie/tv",
      userId: 3,
      datePosted: '5/12/12 6:00pm'
    }
  ];

  

  createPosts(data){
    //
  }

  getPosts() {
    this.posts.getPosts().subscribe(observer);
      //function (data) {
    //   console.log('posts', data);
    //   let cards = document.getElementsByClassName('card-text');
    //   cards[0].innerHTML = data[0].text;
      // if (data[0] === null) {
      //   this.text = "I have very strong opinions about movies";
      // } else {
      //   console.log(data[0]);
      
      //   this.text = data[0].text;
        
      // }
      console.log(this.text);
      
    // });
  }

  
  setPost(){
    this.current = this.allPost[0];
  }
  
  
}

let observer = {
  next: function(data){
    console.log('posts', data);
    // this.allPost = data;
    console.log("allPost" + this.allPost)
    let cards = document.getElementsByClassName('card-text');
    for(let i = 0; i < data.length; i++){
      cards[i].innerHTML = data[i].text;
      this.datePost = data[i].datePosted;
    }
  }    
}