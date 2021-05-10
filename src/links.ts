import { cfg } from "./config.js";

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
  text.innerHTML = `${column.name} [${column.hotkey[3].toLowerCase()}]`;
  col.appendChild(text);

  column.rows.forEach((row) => {
    let link = document.createElement("a");
    link.setAttribute("href", row.link);
    link.className = "link";

    link.innerHTML = `${row.name} [${row.hotkey[3].toLowerCase()}]`;
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
