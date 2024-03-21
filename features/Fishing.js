import settings from '../settings.js';
import { clientShowTitle } from '../utils/functions.js'

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

register("chat", (MFA) => {
    if(settings.lucky_clover_core){
        ChatLib.command(`pc RARE DROP! Lucky Clover Core (+${MFA}% ✯ Magic Find)`);
    }
}).setChatCriteria("RARE DROP! Lucky Clover Core (+${MFA}% ✯ Magic Find)");

register("chat", (MFA) => {
    if(settings.radioactive_vial){
        ChatLib.command(`pc RARE DROP! Radioactive Vial (+${MFA}% ✯ Magic Find)`);
    }
}).setChatCriteria("RARE DROP! Radioactive Vial (+${MFA}% ✯ Magic Find)");

//BABY YETI
register("chat", (rarity, MFA) => {
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
}).setChatCriteria("&r&6&lPET DROP! &r&${rarity}Baby Yeti &r&b(+&r&b${MFA}% &r&b✯ Magic Find&r&b)&r");

//MEGALODON
register("chat", (rarity, MFA) => {
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
}).setChatCriteria("&r&6&lPET DROP! &r&${rarity}Megalodon &r&b(+&r&b${MFA}% &r&b✯ Magic Find&r&b)&r");

//FLYING FISH
register("chat", (rarity, MFA) => {
    ChatLib.chat('test')
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
}).setChatCriteria("&r&6&lPET DROP! &r&${rarity}Flying Fish &r&b(+&r&b${MFA}% &r&b✯ Magic Find&r&b)&r");

// TROPHY FISHES NOTIFICATION
function trophyNotification(rarity, trophy){
    if(rarity === 0 && settings.commonNotification) clientShowTitle(`&${trophy} &b&lDIAMOND`, 30);
    else if(rarity === 1 && settings.rareNotification) clientShowTitle(`&${trophy} &b&lDIAMOND`, 50, outroSound);
}

register("chat", (trophyFish) => {
    switch(trophyFish.substring(1)){
        case "Blobfish":
            trophyNotification(settings.blobfish, trophyFish);
            break;
        case "Flyfish":
            trophyNotification(settings.flyfish, trophyFish);
            break;
        case "Golden Fish":
            trophyNotification(settings.goldenFish, trophyFish);
            break;
        case "Gusher":
            trophyNotification(settings.gusher, trophyFish);
            break;
        case "Karate Fish":
            trophyNotification(settings.karateFish, trophyFish);
            break;
        case "Lavahorse":
            trophyNotification(settings.lavahorse, trophyFish);
            break;
        case "Mana Ray":
            trophyNotification(settings.manaRay, trophyFish);
            break;
        case "Moldfin":
            trophyNotification(settings.moldfin, trophyFish);
            break;
        case "Skeleton Fish":
            trophyNotification(settings.skeletonFish, trophyFish);
            break;
        case "Slugfish":
            trophyNotification(settings.slugfish, trophyFish);
            break;
        case "Soul Fish":
            trophyNotification(settings.soulFish, trophyFish);
            break;
        case "Steaming-Hot Flounder":
            trophyNotification(settings.steamingHotFlounder, trophyFish);
            break;
        case "Sulphur Skitter":
            trophyNotification(settings.sulphurSkitter, trophyFish);
            break;
        case "Vanille":
            trophyNotification(settings.vanille, trophyFish);
            break;
        case "Volcanic Stonefish":
            trophyNotification(settings.volcanicStonefish, trophyFish);
            break;
        case "Obfuscated 1":
            trophyNotification(settings.obfuscatedOne, trophyFish);
            break;
        case "Obfuscated 2":
            trophyNotification(settings.obfuscatedTwo, trophyFish);
            break;
        case "Obfuscated 3":
            trophyNotification(settings.obfuscatedThree, trophyFish);
            break;
        default:
            Chatlib.chat("&r&cCaraddons : error displaying trophy fish notification.&r")
            break;
    }
}).setChatCriteria("&r&6&lTROPHY FISH! &r&bYou caught a &r&${trophyFish}&r&r&r &r&l&r&b&lDIAMOND&r&b.&r").setContains();
