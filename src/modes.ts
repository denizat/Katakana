import { cfg } from "./config.js";
let DOMMode = document.getElementById("mode");

cfg.searchModes.forEach((mode) => {
  let opt = document.createElement("option");
  opt.setAttribute("value", mode.linkOrPrefix);
  opt.innerHTML = `${mode.name} [${mode.hotkey}]`;
  DOMMode.appendChild(opt);
});
// for (const key in config.modes) {
//   let opt = document.createElement("option");
//   opt.setAttribute("value", config.modes[key].link);
//   opt.innerHTML = `${key} [${config.modes[key].hotkey[3].toLowerCase()}]`;
//   mode.appendChild(opt);
// }
