import { cfg, Column } from "./config.ts";

// Stores the last key so we can switch between shortcut modes
let lastKey = undefined;
// Stores the column that is selected from the shortcut combination
let column: undefined | Column = undefined;

/**
 * Handles all of the keypresses
 */
document.addEventListener("keypress", (key) => {
  // We check in order of most specific to least specific.
  if (column !== undefined) {
    // We could put the only one row check here and some computation, but it would cause an extra key press
    column.rows.forEach((row) => {
      if (row.hotkey === key.code) {
        window.location.assign(row.link);
      }
    });

    column = undefined;
  } else if (lastKey === "KeyM") {
    cfg.searchModes.forEach((mode) => {
      if (mode.hotkey === key.code) {
        (<HTMLInputElement>document.getElementById("mode")).value =
          mode.linkOrPrefix;

        (<HTMLFormElement>document.getElementById("search")).action =
          mode.linkOrPrefix;
      }
    });

    // If the user is selecting a mode, then the next thing they will do is type something in the search engine
    document.getElementById("input_box").focus();
    lastKey = undefined;
  } else if (lastKey === "KeyL") {
    cfg.bookMarks.forEach((bookmarkColumn) => {
      if (bookmarkColumn.hotkey === key.code) {
        // Wastes some computation but prevents from having to press again.
        if (bookmarkColumn.rows.length === 1) {
          window.location.assign(bookmarkColumn.rows[0].link);
        }
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
