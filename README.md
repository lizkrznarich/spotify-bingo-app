# SpotifyApp

This app takes a Spotify playlist and generates bingo cards for use in playing Rock n Roll bingo.

## Prerequisites
- Node.js
- NPM
- AngularCLI

## Dev setup

1. Clone the project to your machine
        git clone git@github.com:lizkrznarich/spotify-bingo-app.git

2. Paste Spotify API token and playlist ID into [spotify.service.ts](https://github.com/lizkrznarich/spotify-bingo-app/blob/master/src/app/spotify/spotify.service.ts#L7). Works best with a playlist that has 20-50 songs.

3. Set the number of bingo cards to generate in [spotify.component.ts](https://github.com/lizkrznarich/spotify-bingo-app/blob/master/src/app/spotify/spotify.component.ts#L11)

3. Move to project directory
        cd spotify-bingo-app
        
3. Start dev server
       ng-serve

4. Visit http://localhost:4200/ and click Generate cards
  
## Play the game!

1. Copy and paste your generated cards into a Google Doc
2. Share the Doc with your friends
3. Start a video call and play the Spotify playlist on shuffle
4. Players drink beer (or other beverages of their choice) and fill in their card as songs are played
5. When a player fills in a row, they should shout "Rock n roll!" and award themselves a prize of some sort (perhaps useless junk they've collected from Jordan's Big 10 Pub during real-life versions of this game). Other players take a drink.
