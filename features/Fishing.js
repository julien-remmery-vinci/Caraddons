import settings from '../config/settings.js';

const outroSound = new Sound({source:"outro-sound-effect.ogg"});

//ITEM DROP
register("chat", (MFA) => {
    if(settings.deepSeaOrb){
        ChatLib.command(`pc RARE DROP! Deep Sea Orb (+${MFA}% ✯ Magic Find)`);
    }
}).setChatCriteria("RARE DROP! Deep Sea Orb (+${MFA}% ✯ Magic Find)");

register("chat", (MFA) => {
    if(settings.luckyHoof){
        ChatLib.command(`pc RARE DROP! Lucky Hoof (+${MFA}% ✯ Magic Find)`);
    }
}).setChatCriteria("RARE DROP! Lucky Hoof (+${MFA}% ✯ Magic Find)");

register("chat", (MFA) => {
    if(settings.phantomRod){
        ChatLib.command(`pc RARE DROP! Phantom Rod (+${MFA}% ✯ Magic Find)`);
    }
}).setChatCriteria("RARE DROP! Phantom Rod (+${MFA}% ✯ Magic Find)");

register("chat", (MFA) => {
    if(settings.shredder){
        ChatLib.command(`pc RARE DROP! Shredder (+${MFA}% ✯ Magic Find)`);
    }
}).setChatCriteria("RARE DROP! Shredder (+${MFA}% ✯ Magic Find)");

//BABY YETI
register("chat", (rarity, MFA, event) => {
    switch (rarity) {
        case "5":
            if(settings.epicYeti) ChatLib.command(`pc PET DROP! Epic Baby Yeti (+${MFA}% ✯ Magic Find)`)
            break;
        case "6":
            if(settings.legendaryYeti) ChatLib.command(`pc PET DROP! Legendary Baby Yeti (+${MFA}% ✯ Magic Find)`)
            break;
        default:
            break;
    }
}).setChatCriteria("&r&r&r&6&lPET DROP! &r&${rarity}Baby Yeti &r&b(+&r&b${MFA}% &r&b✯ Magic Find&r&b)&r&r");

//MEGALODON
register("chat", (rarity, MFA, event) => {
    switch (rarity) {
        case "5":
            if(settings.epicMegalodon) ChatLib.command(`pc PET DROP! Epic Megalodon (+${MFA}% ✯ Magic Find)`)
            break;
        case "6":
            if(settings.legendaryMegalodon) ChatLib.command(`pc PET DROP! Legendary Megalodon (+${MFA}% ✯ Magic Find)`)
            break;
        default:
            break;
    }
}).setChatCriteria("&r&r&r&6&lPET DROP! &r&${rarity}Megalodon &r&b(+&r&b${MFA}% &r&b✯ Magic Find&r&b)&r&r");

//FLYING FISH
register("chat", (rarity, MFA, event) => {
    switch (rarity) {
        case "9":
            if(settings.rareFlyingFish) ChatLib.command(`pc PET DROP! Rare Flying Fish (+${MFA}% ✯ Magic Find)`)
            break;
        case "5":
            if(settings.epicFlyingFish) ChatLib.command(`pc PET DROP! Epic Flying Fish (+${MFA}% ✯ Magic Find)`)
            break;
        case "6":
            if(settings.legendaryFlyingFish) ChatLib.command(`pc PET DROP! Legendary Flying Fish (+${MFA}% ✯ Magic Find)`)
            break;
        default:
            break;
    }
}).setChatCriteria("&r&r&r&6&lPET DROP! &r&${rarity}Flying Fish &r&b(+&r&b${MFA}% &r&b✯ Magic Find&r&b)&r&r");


// TROPHY FISHES NOTIFICATION
// register("chat", (trophyFish, event) => {
//     if(TROPHYDROP[trophyFish.substring(1)]){
//         clientShowTitle("&bDiamond &"+trophyFish, 50, outroSound);
//     }else{
//         clientShowTitle("&bDiamond &"+trophyFish, 40);
//     }
// }).setChatCriteria("&r&6&lTROPHY FISH! &r&bYou caught a &r&${trophyFish}&r&r&r &r&l&r&b&lDIAMOND&r&b.&r").setContains();