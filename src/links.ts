import { config } from "./config.js";
const ln = config.links;

// This gets the max ammount of links for any one column so they stay uniform (might be able to replace this with css?)
let max = 0;
Object.keys(ln).forEach((key) => {
  if (Object.keys(ln[key]).length > max) {
    max = Object.keys(ln[key]).length;
  }
});

let container = document.getElementById("container");
for (const key in ln) {
  let col = document.createElement("div");
  let text = document.createElement("p");
  text.innerHTML = `${key} [${ln[key].hotkey[3].toLowerCase()}]`;
  col.appendChild(text);

  let count = 0;
  let items = Object.keys(ln[key].links);
  for (const a in ln[key].links) {
    let link = document.createElement("a");
    link.setAttribute("href", ln[key].links[a].link);
    link.className = "link";
    if (ln[key].links[a].hotkey) {
      link.innerHTML = `${a} [${ln[key].links[a].hotkey[3].toLowerCase()}]`;
    } else {
      link.innerHTML = a;
    }
    col.appendChild(link);
    count += 1;
  }
  for (let i = 0; i < max - count + 1; i++) {
    let link = document.createElement("a");
    link.className = "link null";
    link.innerHTML = "link null";
    col.appendChild(link);
  }
  container.appendChild(col);
}
