import { clientShowTitle } from '../utils/functions.js';
import { TROPHYDROP } from '../config/drops.js';

const outroSound = new Sound({source:"outro-sound-effect.ogg"});

//TROPHY FISHES NOTIFICATION

register("chat", (trophyFish, event) => {
    if(TROPHYDROP[trophyFish.substring(1)]){
        clientShowTitle("&bDiamond &"+trophyFish, 50, outroSound);
    }else{
        clientShowTitle("&bDiamond &"+trophyFish, 40);
    }
}).setChatCriteria("&r&6&lTROPHY FISH! &r&bYou caught a &r&${trophyFish}&r&r&r &r&l&r&b&lDIAMOND&r&b.&r").setContains();