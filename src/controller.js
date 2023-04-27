import { getBearerToken } from '../services/spotifyService.js';
import { searchSongs } from '../services/searchSongs.js';

const element = document.querySelector('#songCardsContainer');

getBearerToken('5938fd7d0e5f4d889ba4db749d5780ad', '63d8eca3cf88416ca881b4f92588b05b')
  .then((token) => {
    searchSongs(token)
      .then((response) => {
        console.log(response.tracks[0]);
        console.log(response.tracks[0].name);
        console.log(response.tracks[0].album.images[0].url);
        console.log(response.tracks[0].preview_url);
      })
  });