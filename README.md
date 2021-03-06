# SpotifyApp

An Angular app that uses the [Spotify API](https://developer.spotify.com/documentation/web-api/) to generate bingo cards from a Spotify playlist for use in playing Rock n Roll bingo.

## Prerequisites
- Node.js
- NPM
- AngularCLI

See Angular docs [Prerequisites](https://angular.io/guide/setup-local#prerequisites) and [Install the Angular CLI](https://angular.io/guide/setup-local#step-1-install-the-angular-cli) for dev environment setup instructions.

- Spotify API credentials(see [Register You App](https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app))

## Dev setup

1. Clone the project to your machine
        
        git clone git@github.com:lizkrznarich/spotify-bingo-app.git

2. Paste Spotify API token and playlist ID into [spotify.service.ts](https://github.com/lizkrznarich/spotify-bingo-app/blob/master/src/app/spotify/spotify.service.ts#L7). Works best with a playlist that has 20-50 songs. [Generate a token for testing](https://developer.spotify.com/console/get-playlist/?playlist_id=59ZbFPES4DQwEjBpWHzrtC&market=&fields=) 
[TODO: add token exchange to app]

3. Set the number of bingo cards to generate in [spotify.component.ts](https://github.com/lizkrznarich/spotify-bingo-app/blob/master/src/app/spotify/spotify.component.ts#L11)
[TODO: add form for card count and playlist ID to app]

3. Move to project directory
        
        cd spotify-bingo-app
        
3. Start dev server
       
        ng serve

4. Visit http://localhost:4200/ and click Generate cards
![Image of Yaktocat](https://github.com/lizkrznarich/spotify-bingo-app/blob/master/generate-cards.png)

## Resources
[Spotify Playlists API Enpoint Reference](https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlist/)

## Play the game!

1. Copy and paste your generated cards into a Google Doc
2. Share the Doc with your friends
3. Players claim a card by adding their name next to the card number
4. Start a video call and play the Spotify playlist on shuffle. Works well with Zoom, since [Zoom allows sharing computer audio](https://support.zoom.us/hc/en-us/articles/201362643-Sharing-Computer-Sound-During-Screen-Sharing) directly to the meeting. The host should use 1 device to play the audio and join the video call on another device in a separate room.
5. Players fill in their card as songs are played, while enjoying festive food and beverage. 
6. When a player fills in a row, they should shout "Rock n roll!" and award themselves a prize of some sort (some kind of useless junk lying around the house). 
