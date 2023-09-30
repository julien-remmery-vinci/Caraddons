//SOUNDS
const chimeSound = new Sound({source:"chime-sound-effect.ogg"});
const outroSound = new Sound({source:"outro-sound-effect.ogg"});

//LISTS OF DROPS TO NOTIFY
const PETSDROP = {
    "Baby Yeti": true,
    "Flying Fish": true,
    "Megalodon": true,
}
const ITEMSDROP = {
    "Deep Sea Orb": true
}
const TROPHYDROP = {
    "Blobfish": false,
    "Flyfish": true,
    "Golden Fish": true,
    "Gusher": false,
    "Karate Fish": true,
    "Lavahorse": false,
    "Mana Ray": true,
    "Moldfin": true,
    "Skeleton Fish": true,
    "Slugfish": true,
    "Soul Fish": true,
    "Steaming-Hot Flounder": false,
    "Sulphur Skitter": false,
    "Vanille": true,
    "Volcanic Stonefish": true,
    "Obfuscated 1": false,
    "Obfuscated 2": false,
    "Obfuscated 3": true
}

//TEST
register("command", () => {
    clientShowTitle("Test", 30, chimeSound);
}).setName("test", true);

//FUNCTIONS
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
//ITEM DROP
register("chat", (dropType, itemDrop, MFAmount) => {
    if(ITEMSDROP[itemDrop.substring(1)]){
        ChatLib.command(`pc ${dropType}! ${itemDrop.substring(1)} (+${MFAmount}% ✯ Magic Find)`);
    }
}).setChatCriteria("&r&6&l${dropType}! &r&${itemDrop} &r&b(+&r&b${MFAmount}% &r&b✯ Magic Find&r&b)&r").setContains();

//PET DROP GLOBAL CASE
//Any pet drop will trigger this (not sure)(it should)(who knows ?)
register("chat", (dropType, petDrop, MFAmount) => {
    if(dropType === "PET DROP" && PETSDROP[petDrop.substring(1)]){
        ChatLib.command(`pc ${dropType}! ${getItemRarity(petDrop[0])} ${petDrop.substring(1)} (+${MFAmount}% ✯ Magic Find)`);
    }
}).setChatCriteria("&r&6&l${dropType}! &r&${petDrop} &r&b(+&r&b${MFAmount}% &r&b✯ Magic Find&r&b)&r").setContains();

//TROPHY FISHES NOTIFICATION

register("chat", (trophyFish, event) => {
    if(TROPHYDROP[trophyFish.substring(1)]){
        clientShowTitle("&bDiamond &"+trophyFish, 50, outroSound);
    }else{
        clientShowTitle("&bDiamond &"+trophyFish, 40);
    }
}).setChatCriteria("&r&6&lTROPHY FISH! &r&bYou caught a &r&${trophyFish}&r&r&r &r&l&r&b&lDIAMOND&r&b.&r").setContains();

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&fBlobfish&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &fBlobfish","", 1, 30, 1);
//             }, 1);
            
//         }
//     })
// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&aFlyfish&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &aFlyfish","", 1, 30, 1);
//                 outroSound.play();
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&6Golden Fish&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &6Golden Fish","", 1, 30, 1);
//                 outroSound/play();
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&fGusher&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &fGusher","", 1, 30, 1);
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&5Karate Fish&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &5Karate Fish","", 1, 30, 1);
//                 outroSound.play();
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&9Lavahorse&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &9Lavahorse","", 1, 30, 1);
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&9Mana Ray&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond&9 Mana Ray","", 1, 30, 1);
//                 outroSound.play();
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&5Moldfin&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &5Moldfin","", 1, 30, 1);
//                 outroSound.play();
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&5Skeleton Fish&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond&5 Skeleton Fish","", 1, 30, 1);
//                 outroSound.play();
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&aSlugfish&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &aSlugfish","", 1, 30, 1);
//                 outroSound.play();
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&5Soul Fish&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &5Soul Fish","", 1, 30, 1);
//                 outroSound.play();
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&fSteaming-Hot Flounder&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &fSteaming-Hot Flounder","", 1, 30, 1);
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&fSulphur Skitter&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond&f Sulphur Skitter","", 1, 30, 1);
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&9Vanille&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &9Vanille","", 1, 30, 1);
//                 outroSound.play();
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&9Volcanic Stonefish&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &9Volcanic Stonefish","", 1, 30, 1);
//                 outroSound.play();
//             }, 1);
            
//         }
//     })
    
// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&fObfuscated 1&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &fObfuscated 1","", 1, 30, 1);
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&aObfuscated 2&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &aObfuscated 2","", 1, 30, 1);
//             }, 1);
            
//         }
//     })

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&9Obfuscated 3&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
//             setTimeout(() => {
//                 Client.showTitle("&bDiamond &9Obfuscated 3","", 1, 30, 1);
//                 outroSound.play();
//             }, 1);
            
//         }
//     })
    

// //MASTER MODE DRAGON SPAWN NOTIFICATION

// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("The SOUL dragon is spawning!")){
//             setTimeout(() => {
//                 Client.showTitle("&5&lSOUL &c&lDRAGON SPAWNING!","", 1, 30, 1);

//             }, 1);
            
//         }
//     })
// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("The POWER dragon is spawning!")){
//             setTimeout(() => {
//                 Client.showTitle("&c&lPOWER &c&lDRAGON SPAWNING!","", 1, 30, 1);

//             }, 1);
            
//         }
//     })
// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("The FLAME dragon is spawning!")){
//             setTimeout(() => {
//                 Client.showTitle("&6&lFLAME &c&lDRAGON SPAWNING!","", 1, 30, 1);

//             }, 1);
            
//         }
//     })
// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("The ICE dragon is spawning!")){
//             setTimeout(() => {
//                 Client.showTitle("&b&lICE &c&lDRAGON SPAWNING!","", 1, 30, 1);

//             }, 1);
            
//         }
//     })
// register("Chat", (event) => {
//     var formattedMessage = ChatLib.getChatMessage(event, true);
//     if(formattedMessage.includes("&r&c&lThe &a&lAPEX &c&ldragon is spawning!&r")){
//             setTimeout(() => {
//                 Client.showTitle("&a&lAPEX &c&lDRAGON SPAWNING!","", 1, 30, 1);

//             }, 1);
            
//         }
//     })
