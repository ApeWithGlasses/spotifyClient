/**
 * 
 * @param {String} token Bearer token generated by getBearerToken.
 * @returns A JSON object.
 */
export const searchSongs = async (token) => {
    if ( !token ) throw new Error ('Token is missing.');

    const URL = 'https://api.spotify.com/v1/artists/6Ghvu1VvMGScGpOUJBAHNH/top-tracks?market=US';

    const REQUEST = {
        method: 'GET',
        headers: {
            'Authorization':token
        }
    }

    let response = await fetch(URL, REQUEST);
    let tracksResponse = await response.json();
    return tracksResponse;
}