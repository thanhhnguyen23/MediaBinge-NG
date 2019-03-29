
export class partialProf {
  profileId: Number;
  favoriteMovies: String;
  favoriteBooks: String;
  favoriteTvShows: String;



  constructor(profileId:Number,favoriteMovies: string, favoriteBooks: string, favoriteTvShows: string) {
      this.profileId = profileId;
    this.favoriteMovies = favoriteMovies;
    this.favoriteBooks = favoriteBooks;
    this.favoriteTvShows = favoriteTvShows;
  }


}