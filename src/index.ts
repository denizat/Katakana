import { cfg } from "./config.js";

if (!cfg.zenMode) {
  import("./links.js").then();
  import("./modes.js").then();
} else {
  document.getElementById("root").style.visibility = "hidden";
}
import "./keyHandler.js";
import "./searchHandler.js";
