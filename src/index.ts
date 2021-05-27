// import { cfg } from "./config";
import "./config";

chrome.storage.sync.get(["cfg"], (e) => {
  let cfg = e.cfg;
  if (cfg.grabMouse) {
    chrome.storage.sync.get(["newPage"], (result) => {
      if (result.newPage) {
        chrome.tabs.create({ url: "index.html" }, null);
        window.close();
        chrome.storage.sync.set({ newPage: false }, null);
      } else {
        chrome.storage.sync.set({ newPage: true }, null);
      }
    });
  }

  if (cfg.startWithFocusOnSearchBar) {
    document.getElementById("input_box").focus();
  }

  if (!cfg.zenMode) {
    //  // import("./links").then();

    // Gets the max row among all columns so that we can have them be an even height, might remove this if there is a css solution but I don't know css so its here for now.
    let max = 0;
    cfg.bookMarks.forEach((column) => {
      if (column.rows.length > max) {
        max = column.rows.length;
      }
    });

    let container = document.getElementById("container");
    cfg.bookMarks.forEach((column) => {
      let col = document.createElement("div");
      let text = document.createElement("p");
      text.innerHTML = `${column.name} [${column.hotkey[0]}]`;
      col.appendChild(text);

      column.rows.forEach((row) => {
        let link = document.createElement("a");
        link.setAttribute("href", row.link);
        link.className = "link";

        link.innerHTML = `${row.name} [${row.hotkey[0]}]`;
        col.appendChild(link);
        if (0 < column.rows.length % max) {
          for (let i = 0; i < (column.rows.length % max) + 1; i++) {
            let link = document.createElement("a");
            link.className = "link null";
            link.innerHTML = "link null";
            col.appendChild(link);
          }
        }
      });
      container.appendChild(col);
    });
  } else {
    document.getElementById("root").style.opacity = "0";
  }
  //// import "./modes.ts";
  let DOMMode = document.getElementById("mode");

  cfg.searchModes.forEach((mode) => {
    let opt = document.createElement("option");
    opt.setAttribute("value", mode.linkOrPrefix);
    opt.innerHTML = `${mode.name} [${mode.hotkey[0]}]`;
    DOMMode.appendChild(opt);
  });

  (<HTMLInputElement>document.getElementById("mode")).value =
    cfg.defaultSearchLink;

  (<HTMLFormElement>document.getElementById("search")).action =
    cfg.defaultSearchLink;

  //// import "./keyHandler.ts";

  // Stores the last key so we can switch between shortcut modes
  let lastKey = undefined;
  // Stores the column that is selected from the shortcut combination
  let column /*: undefined | Column */ = undefined;

  /**
   * Handles all of the keypresses
   */
  document.addEventListener("keypress", (evt) => {
    // We check in order of most specific to least specific.
    if (column !== undefined) {
      // We could put the only one row check here and some computation, but it would cause an extra key press
      column.rows.forEach((row) => {
        if (row.hotkey === evt.key) {
          window.location.assign(row.link);
        }
      });

      column = undefined;
    } else if (lastKey === "m") {
      cfg.searchModes.forEach((mode) => {
        if (mode.hotkey === evt.key) {
          (<HTMLInputElement>document.getElementById("mode")).value =
            mode.linkOrPrefix;

          (<HTMLFormElement>document.getElementById("search")).action =
            mode.linkOrPrefix;
        }
      });

      // If the user is selecting a mode, then the next thing they will do is type something in the search engine
      document.getElementById("input_box").focus();
      lastKey = undefined;
    } else if (lastKey === "l") {
      cfg.bookMarks.forEach((bookmarkColumn) => {
        if (bookmarkColumn.hotkey === evt.key) {
          // Wastes some computation but prevents from having to press again.
          if (bookmarkColumn.rows.length === 1) {
            window.location.assign(bookmarkColumn.rows[0].link);
          }
          column = bookmarkColumn;
        }
      });

      lastKey = undefined;
    } else if (document.activeElement.id !== "input_box") {
      switch (evt.key) {
        case "s":
          evt.preventDefault();
          document.getElementById("input_box").focus();
          break;
        case "m":
          lastKey = "m";
          document.getElementById("mode").focus();
          break;
        case "l":
          lastKey = "l";
          break;
        default:
          lastKey = undefined;
          break;
      }
    }
  });

  // Handles the escape key
  document.onkeydown = (evt) => {
    if (evt.code === "Escape") {
      (<HTMLElement>document.activeElement).blur();
    }
  };

  ////import "./searchHandler.ts";
  const hasHTTP = /http*/;
  document.getElementById("search").onsubmit = (form) => {
    form.preventDefault();
    if (
      hasHTTP.test((<HTMLInputElement>document.getElementById("mode")).value)
    ) {
      window.location.assign(
        (<HTMLInputElement>document.getElementById("mode")).value +
          (<HTMLInputElement>document.getElementById("input_box")).value
      );
    }
    // We have to have an else here because js goes too fast and does the second thing before the first.
    else {
      window.location.assign(
        cfg.defaultSearchLink +
          (<HTMLInputElement>document.getElementById("mode")).value +
          (<HTMLInputElement>document.getElementById("input_box")).value
      );
    }
  };
});
