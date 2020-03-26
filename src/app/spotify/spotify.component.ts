import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
    NUM_TRACKS = 25;
    NUM_CARDS = 2;
    NUM_ROWS = 5;
    ROW_LENGTH = 5;
    cards: any;
    tracks: any;
    trackList: any;

    constructor(protected spotifyService: SpotifyService) { 
        
        this.trackList = [];
        this.cards = [];

    }

    generateCards() {
        let x = 0;
        while (x < this.NUM_CARDS){
            let trackListCopy = this.trackList.slice();
            let randomTracks = [];
            let y = 0
            while (y < this.NUM_TRACKS){
                let trackNum = Math.floor(Math.random()*trackListCopy.length);
                let randomTrack = trackListCopy[trackNum];
                let item;
                if(randomTracks.includes(randomTrack[1])){
                    item = randomTrack[0];
                } else {
                    item = randomTrack[Math.floor(Math.random()*randomTrack.length)];
                }
                randomTracks.push(item);
                trackListCopy.splice(trackNum, 1);
                y++
            }
            this.cards.push(this.formatCard(randomTracks));
            x++
        }
    }

    formatCard(tracks){
        let card = [];
        while (tracks.length > 0) {
            let x=0;
            while (x < this.NUM_ROWS){
                let y = 0;
                let row = [];
                while (y < this.ROW_LENGTH){
                    row.push(tracks[0]);
                    tracks.shift();
                    y++;
                }
                card.push(row);
                x++
            }  
        } 
        card[2][2] = 'FREE SPACE';
        return(card);
    }            

    ngOnInit() {
        this.spotifyService.getPlaylist().subscribe(res => {
            this.tracks = res.items;
            for (let track of this.tracks) {
                this.trackList.push([track.track.name, track.track.artists[0].name]); 
            }  

        });
    }
}
