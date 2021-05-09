import { config } from "./config.js";
let lastKey = undefined;
let column = undefined;
document.addEventListener("keypress", (key) => {
  // If the input box is not focused
  if (document.activeElement.id !== "input_box") {
    if (column) {
      const keys = Object.keys(column.links);
      if (keys.length === 1) {
        window.location.replace(column.links[keys[0]].link);
      }
      for (const row in column.links) {
        if (column.links[row].hotkey === key.code) {
          console.log(column.links[row].link);
          window.location.replace(column.links[row].link);
        }
      }
      column = undefined;
    } else if (lastKey === "KeyM") {
      for (const hotkey in config.modes) {
        if (config.modes[hotkey].hotkey === key.code) {
          (<HTMLInputElement>document.getElementById("mode")).value =
            config.modes[hotkey].link;
          break;
        }
      }
      lastKey = undefined;
    } else if (lastKey === "KeyL") {
      for (const link in config.links) {
        if (config.links[link].hotkey === key.code) {
          column = config.links[link];
          console.log(column);
          break;
        }
      }
      lastKey = undefined;
    } else {
      switch (key.code) {
        case "KeyS":
          key.preventDefault();
          document.getElementById("input_box").focus();
          break;
        case "KeyM":
          lastKey = "KeyM";
          document.getElementById("mode").focus();
          break;
        case "KeyL":
          lastKey = "KeyL";
          break;
        default:
          lastKey = undefined;
          break;
      }
    }
  }
});
