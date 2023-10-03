/**
 * Displays provided message on player's screen for provided duration and play provided sound
 * @param {String} message The message to be displayed on screen
 * @param {Number} duration Time to stay on screen
 * @param {any} sound The sound to be played
 * @returns {boolean} false if message is empty or duration is less or equal to 0
 */
function clientShowTitle(message, duration, sound){
    if(message === "" || duration <= 0) return false;
    sound = sound ? sound : undefined;
    setTimeout(() => {
        Client.showTitle(message, "", 1, duration, 1);
        if(sound) sound.play();
    }, 1);
}

/**
 * Description
 * @param {any} rarity 
 * @returns {any} Item rarity
 */
function getItemRarity(rarity){
    switch(rarity){
        case 'f':
            return "Common";
        case 'a':
            return "Uncommon";
        case '9':
            return "Rare";
        case '5':
            return "Epic";
        case '6':
            return "Legendary";
        case 'd':
            return "Mythic";
        default:
            return undefined;
    }
}

module.exports = { clientShowTitle, getItemRarity };