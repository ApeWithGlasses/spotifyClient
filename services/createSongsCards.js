/**
 * 
 * @param {HTMLDivElement} element Container for your cards.
 * @param {Array} response Array that contains the tracks.
 */
export const createSongsCards = ( element, response ) => {
    let songCardsContent = '';
    response.tracks.map(song => {
        songCardsContent += `
        <div class="song__card">
            <img src="${song.album.images[1].url}" alt="" class="song__banner">
            <p class="song__name">${song.name}</p>
            <audio src="${song.preview_url}" class="song__player" controls></audio>
        </div>
        `;
    });

    element.innerHTML = songCardsContent;
}