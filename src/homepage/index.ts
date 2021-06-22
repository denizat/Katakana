// import { cfg } from "./config";
// import "../config";

import keyHandler from "./keyHandler";
import links from "./links";
import modes from "./modes";
import searchHandler from "./searchHandler";
import type { Config } from "../options/config"

chrome.storage.sync.get(["cfg"], (e) => {
  const cfg: Config = e.cfg;
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

  if (cfg.startWithFocusOnSearchBar) {
    document.getElementById("input_box").focus();
  }

  if (!cfg.zenMode) {
    links(cfg)
  } else {
    document.getElementById("root").style.opacity = "0";
  }
  modes(cfg)
  keyHandler(cfg)
  searchHandler(cfg)
});
