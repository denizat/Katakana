import { Element } from "@denizat/node_html";
import { cfg } from "./config.js";
import { d } from "./document.js";
let DOMMode = d.getElementById("mode");

cfg.searchModes.forEach((mode) => {
  if (!mode.hidden) {
    let opt = new Element("option", DOMMode);
    opt.setAttribute("value", mode.linkOrPrefix);
    opt.appendChild(`${mode.name} [${mode.hotkey[0]}]`);
  }
});

export const modes = DOMMode;

// (<HTMLInputElement>document.getElementById("mode")).value =
//   cfg.defaultSearchLink;

// (<HTMLFormElement>document.getElementById("search")).action =
//   cfg.defaultSearchLink;
