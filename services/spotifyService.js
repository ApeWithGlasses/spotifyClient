/**
 * 
 * @param {String} client_id Your spotify unique client id
 * @param {String} client_secret Your spotify unique client secret
 */
export const getBearerToken = async (client_id, client_secret, callback) => {
    if (!client_id) throw new Error(`Client id is missing.`);
    if (!client_secret) throw new Error(`Client secret is missing.`);

    const URL = 'https://accounts.spotify.com/api/token';

    let grantType = 'grant_type=client_credentials';
    let clientId = `client_id=${client_id}`;
    let clientSecret = `client_secret=${client_secret}`;

    const REQUEST = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `${grantType}&${clientId}&${clientSecret}`
    }

    let response = await fetch(URL, REQUEST);
    let tokenResponse = await response.json();
    let token = `${tokenResponse.token_type} ${tokenResponse.access_token}`;

    return token;
}