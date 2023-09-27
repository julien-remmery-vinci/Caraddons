const chimeSound = new Sound({source:"chime-sound-effect.ogg"});
const outroSound = new Sound({source:"outro-sound-effect.ogg"});

//FUNCTIONS
function clientShowTitle(message, duration, sound){
    if(message === "" || duration <= 0) return false;
    setTimeout(() => {
        Client.showTitle(message, "", 1, duration, 1);
        sound.play();
    }, 1);
}


//TEST TRIGGER
register("Chat", (event) => {
        var formattedMessage = ChatLib.getChatMessage(event, true);
        if(formattedMessage.includes("$TEST$")){
            clientShowTitle("Test", 30, chimeSound);
        }
             
    })

register("Chat", (event) => {
        var formattedMessage = ChatLib.getChatMessage(event, true);
        if(formattedMessage.includes("$OUTRO$"))
            clientShowTitle("Outro !", 30, outroSound);
    })

//Item drop
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("&r&6&lRARE DROP! &r&5Deep Sea Orb &r")){
        Client.showTitle("&5Deep Sea Orb","", 1, 30, 1);
        ChatLib.command("pc RARE DROP! Deep Sea Orb");
    }
})
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("&r&6&lRARE DROP! &r&aLucky Hoof &r"))
        ChatLib.command("pc RARE DROP! Lucky Hoof");
})
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("&r&6&lPET DROP! &r&9Flying Fish &r"))
        ChatLib.command("pc Pet DROP! Rare Flying Fish");
})
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("&r&6&lPET DROP! &r&5Flying Fish &r"))
        ChatLib.command("pc Pet DROP! Epic Flying Fish");
})
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("&r&6&lPET DROP! &r&6Flying Fish &r"))	
        ChatLib.command("pc Pet DROP! Legendary Flying Fish");
})

//TROPHY FISHES NOTIFICATION

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&fBlobfish&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){
            setTimeout(() => {
                Client.showTitle("&bDiamond &fBlobfish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Flyfish DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond &aFlyfish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&6&lGolden Fish&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond &6Golden Fish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Gusher DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond &fGusher","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&5Karate Fish&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond &5Karate Fish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("&r&6&lTROPHY FISH! &r&bYou caught a &r&9Lavahorse&r&r&r &r&l&r&b&lDIAMOND&r&b.&r")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond &9Lavahorse","", 1, 30, 1);
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
                Client.showTitle("&bDiamond &5Moldfin","", 1, 30, 1);
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
                Client.showTitle("&bDiamond &aSlugfish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Soul Fish DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond &5Soul Fish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Steaming-Hot Flounder DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond &fSteaming-Hot Flounder","", 1, 30, 1);
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
                Client.showTitle("&bDiamond &9Vanille","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Volcanic Stonefish DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond &9Volcanic Stonefish","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })
    
register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Obfuscated 1 DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond &fObfuscated 1","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Obfuscated 2 DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond &aObfuscated 2","", 1, 30, 1);
                outroSound.play();
            }, 1);
            
        }
    })

register("Chat", (event) => {
    var formattedMessage = ChatLib.getChatMessage(event, true);
    if(formattedMessage.includes("TROPHY FISH! You caught a Obfuscated 3 DIAMOND.")){	
            setTimeout(() => {
                Client.showTitle("&bDiamond &9Obfuscated 3","", 1, 30, 1);
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
