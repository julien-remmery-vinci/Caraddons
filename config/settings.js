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
        const subcategories = ["Spooky", "Jerry", "Marina", "Global"];
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

}

export default new Settings();
