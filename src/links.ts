import { cfg } from "./config";

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
