const sound = new Sound({source:"chime-sound-effect.ogg"});
const outroSound = new Sound({source:"outro-sound-effect.ogg"});

//TEST TRIGGER
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("$TEST$")){	
            setTimeout(() => {
                Client.showTitle("&l&bTest!","", 1, 30, 1);
                sound.play();
            }, 1);
            
        }
    })

//TROPHY FISHES NOTIFICATION

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Blobfish DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&f Blobfish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Flyfish DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&a Flyfish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Golden Fish DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&6 Golden Fish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Gusher DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&5 Karate Fish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Karate Fish DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&5 Karate Fish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Lavahorse DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&59 Lavahorse","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Mana Ray DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&9 Mana Ray","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Moldfin DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&5 Moldfin","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Skeleton Fish DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&5 Skeleton Fish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Slugfish DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&a Slugfish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Soul Fish DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&5 Soul Fish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Steaming-Hot Flounder DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&f Steaming-Hot Flounder","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Sulphur Skitter DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&f Sulphur Skitter","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Vanille DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&9 Vanille","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Volcanic Stonefish DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&9 Volcanic Stonefish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })
    
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Obfuscated 1 DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&f Obfuscated 1","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Obfuscated 2 DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&a Obfuscated 2","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Obfuscated 3 DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond&9 Obfuscated 3","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })
    

//MASTER MODE DRAGON SPAWN NOTIFICATION

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("The SOUL dragon is spawning!")){
            setTimeout(() => {
                Client.showTitle("&5&lSOUL &c&lDRAGON SPAWNING!","", 1, 30, 1);

            }, 1);
            
        }
    })
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("The POWER dragon is spawning!")){
            setTimeout(() => {
                Client.showTitle("&c&lPOWER &c&lDRAGON SPAWNING!","", 1, 30, 1);

            }, 1);
            
        }
    })
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("The FLAME dragon is spawning!")){
            setTimeout(() => {
                Client.showTitle("&6&lFLAME &c&lDRAGON SPAWNING!","", 1, 30, 1);

            }, 1);
            
        }
    })
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("The ICE dragon is spawning!")){
            setTimeout(() => {
                Client.showTitle("&b&lICE &c&lDRAGON SPAWNING!","", 1, 30, 1);

            }, 1);
            
        }
    })
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("The APEX dragon is spawning!")){
            setTimeout(() => {
                Client.showTitle("&a&lAPEX &c&lDRAGON SPAWNING!","", 1, 30, 1);

            }, 1);
            
        }
    })
