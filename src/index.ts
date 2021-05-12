import { cfg } from "./config.js";

if (!cfg.zenMode) {
  import("./links.js").then();
  import("./style.js").then();
} else {
  // We are setting the opacity to 0 because visiblity and display both prevent user input to textbox
  document.getElementById("root").style.opacity = "0";
}

// Even though it makes elements, it also makes options so its required even if zen mode is on
import("./modes.js");

import "./keyHandler.js";
import "./searchHandler.js";
