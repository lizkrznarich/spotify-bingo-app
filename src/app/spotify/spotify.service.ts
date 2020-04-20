import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyService {
    
  constructor( private http: HttpClient ) {}
  
  //TODO: ADD TOKEN GENERATION
  getToken() {
  
  }

  getPlaylist(token, playlistId): Observable<any>{
      console.log("getting playlist");
      return this.http
        .get<any>(
          'https://api.spotify.com/v1/playlists/' + playlistId + '/tracks',
          {
            headers: { Authorization: "'Bearer " + token + "'" }
          }
        );
  }

}
