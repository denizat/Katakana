import { cfg, Column } from "./config.js";

let lastKey = undefined;
let column: undefined | Column = undefined;

document.addEventListener("keypress", (key) => {
  if (column !== undefined) {
    if (column.rows.length === 1) {
      window.location.replace(column.rows[0].link);
    }

    column.rows.forEach((row) => {
      if (row.hotkey === key.code) {
        window.location.replace(row.link);
      }
    });

    column = undefined;
  } else if (lastKey === "KeyM") {
    cfg.searchModes.forEach((mode) => {
      if (mode.hotkey === key.code) {
        (<HTMLInputElement>document.getElementById("mode")).value =
          mode.linkOrPrefix;
      }
    });

    lastKey = undefined;
  } else if (lastKey === "KeyL") {
    cfg.bookMarks.forEach((bookmarkColumn) => {
      if (bookmarkColumn.hotkey === key.code) {
        column = bookmarkColumn;
      }
    });

    lastKey = undefined;
  } else {
    if (document.activeElement.id !== "input_box") {
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
