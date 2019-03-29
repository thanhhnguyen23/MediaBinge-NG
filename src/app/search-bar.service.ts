import { Injectable } from '@angular/core';
// import { ApiRequestResults } from './models/apirequestresults';
import { HttpClient, HttpParams } from '@angular/common/http'; // TN
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  // readonly isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(private http: HttpClient) { }

  getMedia(apiRequestResults) {
    console.log('apiRequestResults: ', apiRequestResults);

    let resp: any;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.omdbapi.com/?apikey=aa82249a&t=${apiRequestResults.searchTitle}`, false);
    xhr.send();
    resp = JSON.parse(xhr.response);
    console.log('resp: ', resp);

    function setPoster(src) {
      document.getElementById("poster-image").setAttribute("src", src);
    }

    function setInfo(title, year, plot) {
      let info = document.getElementById("info");
      info.innerHTML = "<header><div id='title'>" + title + "</div>" +
        "<div id='year'>" + year + "</div></header>" +
        "<div id='summary'>" + plot + "</div>";
    }
    setPoster(resp.Poster);
    setInfo(resp.Title, resp.Year, resp.Plot);

    return resp;


  }
}
