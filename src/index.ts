import { cfg } from "./config";

if (cfg.grabMouse) {
  chrome.storage.sync.get(["newPage"], (result) => {
    if (result.newPage) {
      chrome.tabs.create({ url: "index.html" }, null);
      window.close();
      chrome.storage.sync.set({ newPage: false }, null);
    } else {
      chrome.storage.sync.set({ newPage: true }, null);
    }
  });
}

if (!cfg.zenMode) {
  import("./links").then();
} else {
  document.getElementById("root").style.opacity = "0";
}
import "./modes.ts";

import "./keyHandler.ts";
import "./searchHandler.ts";
