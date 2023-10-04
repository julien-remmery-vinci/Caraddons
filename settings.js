import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
} from 'Vigilance';

// The only parameter that is required is the first, which should be the Module name.
// The other 2 parameters are optional.
// The 2nd parameter is the title of the settings window, seen in the top left above the
// category list.
// The 3rd parameter is an object that determines the sorting order of the categories.

@Vigilant('Caraddons', 'Caraddons', {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Item drop', 'Pet drop', 'Trophy Fishing'];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
    getSubcategoryComparator: () => (a, b) => {
        const subcategories = ["Spooky", "Jerry", "Marina", "Global", "Common Trophy", "Rare trophy", "Rarity Selection"];
        return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) -
            subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
    }
})
class Settings {
    constructor() {
        this.initialize(this);

        this.addDependency("Epic Baby Yeti", "Baby Yeti")
        this.addDependency("Legendary Baby Yeti", "Baby Yeti")

        this.addDependency("Epic Megalodon", "Megalodon")
        this.addDependency("Legendary Megalodon", "Megalodon")

        this.addDependency("Rare Flying Fish", "Flying Fish")
        this.addDependency("Epic Flying Fish", "Flying Fish")
        this.addDependency("Legendary Flying Fish", "Flying Fish")

        this.addDependency("Blobfish", "Trophy notification")
        this.addDependency("Flyfish", "Trophy notification")
        this.addDependency("Golden Fish", "Trophy notification")
        this.addDependency("Gusher", "Trophy notification")
        this.addDependency("Karate Fish", "Trophy notification")
        this.addDependency("Lavahorse", "Trophy notification")
        this.addDependency("Mana Ray", "Trophy notification")
        this.addDependency("Moldfin", "Trophy notification")
        this.addDependency("Skeleton Fish", "Trophy notification")
        this.addDependency("Slugfish", "Trophy notification")
        this.addDependency("Soul Fish", "Trophy notification")
        this.addDependency("Steaming-Hot Flounder", "Trophy notification")
        this.addDependency("Sulphur Skitter", "Trophy notification")
        this.addDependency("Vanille", "Trophy notification")
        this.addDependency("Volcanic Stonefish", "Trophy notification")
        this.addDependency("Obfuscated 1", "Trophy notification")
        this.addDependency("Obfuscated 2", "Trophy notification")
        this.addDependency("Obfuscated 3", "Trophy notification")


    }

    //SPOOKY DROPS
    @SwitchProperty({
        name: 'Deep Sea Orb',
        description: 'Sends the item drop message into party chat',
        category: 'Item drop',
        subcategory: 'Spooky',
        placeholder: 'Activate',
    })
    deepSeaOrb = false;

    @SwitchProperty({
        name: 'Phantom Rod',
        description: 'Sends the item drop message into party chat',
        category: 'Item drop',
        subcategory: 'Spooky',
        placeholder: 'Activate',
    })
    phantomRod = false;

    @SwitchProperty({
        name: 'Lucky Hoof',
        description: 'Sends the item drop message into party chat',
        category: 'Item drop',
        subcategory: 'Spooky',
        placeholder: 'Activate',
    })
    luckyHoof = false;

    //JERRY DROPS
    @SwitchProperty({
        name: 'Baby Yeti',
        description: 'Display additionnal settings',
        category: 'Pet drop',
        subcategory: 'Jerry',
        placeholder: "Activate"
    })
    yeti = false;

    @SwitchProperty({
        name: 'Epic Baby Yeti',
        description: 'Sends the pet drop message into party chat',
        category: 'Pet drop',
        subcategory: 'Jerry',
        placeholder: 'Activate',
    })
    epicYeti = false;

    @SwitchProperty({
        name: 'Legendary Baby Yeti',
        description: 'Sends the pet drop message into party chat',
        category: 'Pet drop',
        subcategory: 'Jerry',
        placeholder: 'Activate',
    })
    legendaryYeti = false;

    //MARINA DROPS
    @SwitchProperty({
        name: 'Megalodon',
        description: 'Display additionnal settings',
        category: 'Pet drop',
        subcategory: 'Marina',
        placeholder: 'Activate',
    })
    megalodon = false;

    @SwitchProperty({
        name: 'Epic Megalodon',
        description: 'Sends the pet drop message into party chat',
        category: 'Pet drop',
        subcategory: 'Marina',
        placeholder: 'Activate',
    })
    epicMegalodon = false;

    @SwitchProperty({
        name: 'Legendary Megalodon',
        description: 'Sends the pet drop message into party chat',
        category: 'Pet drop',
        subcategory: 'Marina',
        placeholder: 'Activate',
    })
    legendaryMegalodon = false;

    //GLOBAL WATER DROPS
    @SwitchProperty({
        name: 'Flying Fish',
        description: 'Display additionnal settings',
        category: 'Pet drop',
        subcategory: 'Global',
        placeholder: 'Activate',
    })
    flyingFish = false;

    @SwitchProperty({
        name: 'Rare Flying Fish',
        description: 'Sends the pet drop message into party chat',
        category: 'Pet drop',
        subcategory: 'Global',
        placeholder: 'Activate',
    })
    rareFlyingFish = false;

    @SwitchProperty({
        name: 'Epic Flying Fish',
        description: 'Sends the pet drop message into party chat',
        category: 'Pet drop',
        subcategory: 'Global',
        placeholder: 'Activate',
    })
    epicFlyingFish = false;

    @SwitchProperty({
        name: 'Legendary Flying Fish',
        description: 'Sends the pet drop message into party chat',
        category: 'Pet drop',
        subcategory: 'Global',
        placeholder: 'Activate',
    })
    legendaryFlyingFish = false;

    @SwitchProperty({
        name: 'Shredder',
        description: 'Sends the item drop message into party chat',
        category: 'Item drop',
        subcategory: 'Global',
        placeholder: 'Activate',
    })
    shredder = false;


    //TROPHY FISHING
    @SwitchProperty({
        name: 'Common Trophy Fish',
        description: "Enable notification for 'Common Trophies' diamond",
        category: 'Trophy Fishing',
        subcategory: 'Notification',
    })
    commonNotification = false;

    @SwitchProperty({
        name: 'Rare Trophy Fish',
        description: "Enable notification for 'Rare Trophies' diamond, rare trophies' notification will have a cool music played",
        category: 'Trophy Fishing',
        subcategory: 'Notification',
    })
    rareNotification = false;
    
    @SwitchProperty({
        name: 'Trophy notification',
        description: 'Display rarity selection for diamond trophy fishes',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
    })
    trophyFish = false;
    
    @SelectorProperty({
        name: 'Blobfish',
        description: 'Set the rarity for Blobfish diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    blobfish = 0;

    @SelectorProperty({
        name: 'Flyfish',
        description: 'Set the rarity for Flyfish diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    flyfish = 0;

    @SelectorProperty({
        name: 'Golden Fish',
        description: 'Set the rarity for Golden Fish diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    goldenFish = 0;

    @SelectorProperty({
        name: 'Gusher',
        description: 'Set the rarity for Gusher diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    gusher = 0;

    @SelectorProperty({
        name: 'Karate Fish',
        description: 'Set the rarity for Karate Fish diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    karateFish = 0;

    @SelectorProperty({
        name: 'Lavahorse',
        description: 'Set the rarity for Lavahorse diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    lavahorse = 0;

    @SelectorProperty({
        name: 'Mana Ray',
        description: 'Set the rarity for Mana Ray diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    manaRay = 0;

    @SelectorProperty({
        name: 'Moldfin',
        description: 'Set the rarity for Moldfin diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    moldfin = 0;

    @SelectorProperty({
        name: 'Skeleton Fish',
        description: 'Set the rarity for Skeleton Fish diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    skeletonFish = 0;

    @SelectorProperty({
        name: 'Slugfish',
        description: 'Set the rarity for Slugfish diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    slugfish = 0;

    @SelectorProperty({
        name: 'Soul Fish',
        description: 'Set the rarity for Soul Fish diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    soulFish = 0;

    @SelectorProperty({
        name: 'Steaming-Hot Flounder',
        description: 'Set the rarity for Steaming-Hot Flounder diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    steamingHotFlounder = 0;

    @SelectorProperty({
        name: 'Sulphur Skitter',
        description: 'Set the rarity for Sulphur Skitter diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    sulphurSkitter = 0;

    @SelectorProperty({
        name: 'Vanille',
        description: 'Set the rarity for Vanille diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    vanille = 0;

    @SelectorProperty({
        name: 'Volcanic Stonefish',
        description: 'Set the rarity for Volcanic Stonefish diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    volcanicStonefish = 0;

    @SelectorProperty({
        name: 'Obfuscated 1',
        description: 'Set the rarity for Obfuscated 1 diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    obfuscatedOne = 0;

    @SelectorProperty({
        name: 'Obfuscated 2',
        description: 'Set the rarity for Obfuscated 2 diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    obfuscatedTwo = 0;

    @SelectorProperty({
        name: 'Obfuscated 3',
        description: 'Set the rarity for Obfuscated 3 diamond',
        category: 'Trophy Fishing',
        subcategory: 'Rarity Selection',
        options: ['Common', 'Rare'],
    })
    obfuscatedThree = 0;
}

export default new Settings();
