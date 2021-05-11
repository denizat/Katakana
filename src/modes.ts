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

const hasHTTP = /http*/;

document.getElementById("search").onsubmit = (form) => {
  form.preventDefault();
  if (hasHTTP.test((<HTMLInputElement>document.getElementById("mode")).value)) {
    window.location.assign(
      (<HTMLInputElement>document.getElementById("mode")).value +
        (<HTMLInputElement>document.getElementById("input_box")).value
    );
  }
  // We have to have an else here because js goes too fast and does the second thing before the first.
  else {
    // window.location.assign(
    console.log(
      cfg.defaultSearchLink +
        (<HTMLInputElement>document.getElementById("mode")).value +
        (<HTMLInputElement>document.getElementById("input_box")).value
    );
  }
};
