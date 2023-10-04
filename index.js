import Settings from "./settings.js";
import './features/Fishing.js';

// to open the config gui use the "openGUI" function
register("command", () => Settings.openGUI()).setName("caraddons").setAliases("cara");