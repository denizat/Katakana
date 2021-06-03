import { Element } from "@denizat/node_html";
import { cfg } from "./config.js";

let options: Element[] = [];
cfg.searchModes.forEach((mode) => {
  let opt = new Element("option");
  opt.setAttribute("value", mode.linkOrPrefix);
  if (!mode.hidden) {
    opt.appendChild(`${mode.name} [${mode.hotkey[0]}]`);
  }
  options.push(opt);
});

export const modes = options;

// (<HTMLInputElement>document.getElementById("mode")).value =
//   cfg.defaultSearchLink;

// (<HTMLFormElement>document.getElementById("search")).action =
//   cfg.defaultSearchLink;
