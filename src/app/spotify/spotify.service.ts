import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyService {
    
    constructor(
    private http: HttpClient,
  ) {}

    getToken() {
    
    }

    //TODO: ADD TOKEN GENERATION
    getPlaylist(): Observable<any>{
        console.log("getting playlist");
        return this.http
          .get<any>(
            'https://api.spotify.com/v1/playlists/5IIzbQFeR0yfDPh2IjyTLk/tracks',
            {
              headers: { Authorization: 'Bearer [PASTE SPOTIFY API TOKEN HERE]' }
            }
          );
    }

}
