import { cfg } from "./config";
if (!cfg.zenMode) {
  import("./links").then();
  import("./style").then();
} else {
  document.getElementById("root").style.opacity = "0";
}
import "./modes.ts";

import "./keyHandler.ts";
import "./searchHandler.ts";
