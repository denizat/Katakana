import { cfg } from "./config.js";
import { Element, render } from "@denizat/node_html";

// Gets the max row among all columns so that we can have them be an even height, might remove this if there is a css solution but I don't know css so its here for now.
let max = 0;
cfg.bookMarks.forEach((column) => {
  if (column.rows.length > max) {
    max = column.rows.length;
  }
});

// let container = document.getElementById("container");
let container = new Element("container");
container.setAttribute("class", "container");
cfg.bookMarks.forEach((column) => {
  let col = new Element("div");
  let text = new Element("p");
  if (column.hidden !== true) {
    text.appendChild(`${column.name} [${column.hotkey[0]}]`);
  }

  col.appendChild(text);

  column.rows.forEach((row) => {
    let link = new Element("a");
    link.setAttribute("class", "link");
    if (row.hidden !== true && column.hidden !== true) {
      link.setAttribute("href", row.link);
      link.appendChild(`${row.name} [${row.hotkey[0]}]`);
    }
    col.appendChild(link);
    if (0 < column.rows.length % max) {
      for (let i = 0; i < (column.rows.length % max) + 1; i++) {
        let link = new Element("a");
        link.setAttribute("class", "link null");
        link.appendChild("link null");
        col.appendChild(link);
      }
    }
  });
  container.appendChild(col);
});

export const links = container;
