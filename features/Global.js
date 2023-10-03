import { PETSDROP, ITEMSDROP } from '../config/drops.js';
import { getItemRarity } from '../utils/functions.js';

//ITEM DROP
register("chat", (dropType, itemDrop, MFAmount) => {
    if(ITEMSDROP[itemDrop.substring(1)]){
        ChatLib.command(`pc ${dropType}! ${itemDrop.substring(1)} (+${MFAmount}% ✯ Magic Find)`);
    }
}).setChatCriteria("&r&6&l${dropType}! &r&${itemDrop} &r&b(+&r&b${MFAmount}% &r&b✯ Magic Find&r&b)&r").setContains();

//PET DROP
register("chat", (petDrop, MFAmount) => {
    if(PETSDROP[petDrop.substring(1)]){
        ChatLib.command(`pc PET DROP! ${getItemRarity(petDrop[0])} ${petDrop.substring(1)} (+${MFAmount}% ✯ Magic Find)`);
    }
}).setChatCriteria("&r&6&lPET DROP! &r&${petDrop} &r&b(+&r&b${MFAmount}% &r&b✯ Magic Find&r&b)&r").setContains();