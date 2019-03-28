import { userInfo } from './userInfo';

export class Profile {
  profileId: Number;
  favoriteMovies: String;
  favoriteBooks: String;
  favoriteTvShows: String;
  user: userInfo;



  constructor(favoriteMovies: string, favoriteBooks: string, favoriteTvShows: string, user: userInfo) {
    this.favoriteMovies = favoriteMovies;
    this.favoriteBooks = favoriteBooks;
    this.favoriteTvShows = favoriteTvShows;
    this.user = user;
  }


}
