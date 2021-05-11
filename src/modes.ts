import { cfg } from "./config.js";
let DOMMode = document.getElementById("mode");

cfg.searchModes.forEach((mode) => {
  let opt = document.createElement("option");
  opt.setAttribute("value", mode.linkOrPrefix);
  opt.innerHTML = `${mode.name} [${mode.hotkey[3].toLowerCase()}]`;
  DOMMode.appendChild(opt);
});

(<HTMLInputElement>document.getElementById("mode")).value =
  cfg.defaultSearchLink;

(<HTMLFormElement>document.getElementById("search")).action =
  cfg.defaultSearchLink;
