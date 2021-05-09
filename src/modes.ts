import { config } from "./config.js";
let mode = document.getElementById("mode");
for (const key in config.modes) {
  let opt = document.createElement("option");
  opt.setAttribute("value", config.modes[key].link);
  opt.innerHTML = `${key} [${config.modes[key].hotkey[3].toLowerCase()}]`;
  mode.appendChild(opt);
}
