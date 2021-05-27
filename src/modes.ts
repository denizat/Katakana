import { cfg } from "./config";
let DOMMode = document.getElementById("mode");

cfg.searchModes.forEach((mode) => {
  if (!mode.hidden) {
    let opt = document.createElement("option");
    opt.setAttribute("value", mode.linkOrPrefix);
    opt.innerHTML = `${mode.name} [${mode.hotkey[0]}]`;
    DOMMode.appendChild(opt);
  }
});

(<HTMLInputElement>document.getElementById("mode")).value =
  cfg.defaultSearchLink;

(<HTMLFormElement>document.getElementById("search")).action =
  cfg.defaultSearchLink;
