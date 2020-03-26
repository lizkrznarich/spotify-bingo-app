import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyService {
  TOKEN = '[YOUR SPOTIFY API TOKEN HERE]';
  PLAYLIST_ID = '[YOUR PLAYLIST ID HERE]'; 
    
  constructor( private http: HttpClient ) {}
  
  //TODO: ADD TOKEN GENERATION
  getToken() {
  
  }

  getPlaylist(): Observable<any>{
      console.log("getting playlist");
      return this.http
        .get<any>(
          'https://api.spotify.com/v1/playlists/' + this.PLAYLIST_ID + '/tracks',
          {
            headers: { Authorization: "'Bearer " + this.TOKEN + "'" }
          }
        );
  }

}
