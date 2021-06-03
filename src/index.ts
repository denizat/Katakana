import { Element, render } from "@denizat/node_html";
import { d } from "./document.js";
// import { cfg } from "./config.js";
// import * as fs from "fs";

// import * as path from "path";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

const html = d.HTML;
html.appendChild(links);
let root = new Element("div", html);
root.setId("root");

let sb = new Element("div", root);
sb.setAttribute("class", "search-box");
let select = new Element("select", sb);
new Element("span", sb).appendChild("[m]");
select.setAttribute("name", "mode").setAttribute("autocomplete", "on");
select.setId("mode");

let form = new Element("form", sb);
form.setId("search");
form.setAttribute("class", "search");
form.setAttribute("method", "get");
let input = new Element("input", form);
input.setId("input_box");
input.setAttribute("class", "input_box");
input.setAttribute("type", "text");
input.setAttribute("name", "q");
input.setAttribute("autocomplete", "off").isSelfClosing();
new Element("span", sb).appendChild("[s]");

const inner = `

      <div class="search-box">
        <select name="mode" id="mode" autocomplete></select>
        <span>[m]</span>
        <form id="search" class="search" method="get">
          <input
            id="input_box"
            class="input_box"
            type="text"
            name="q"
            autocomplete="off"
          />
        </form>
        <span>[s]</span>
      </div>
      <div id="container" class="container"></div>

`;

import { links } from "./links.js";
root.appendChild(links);

import { modes } from "./modes.js";
// root.appendChild(modes);
if (d.getElementById("mode") instanceof Element) {
  d.getElementById("mode").innerHTML = modes;
}

new Element("script", root)
  .setAttribute("type", "module")
  .setAttribute("src", "keyHandler.js");
new Element("script", root)
  .setAttribute("type", "module")
  .setAttribute("src", "searchHandler.js");

// let a = path.join(__dirname, "bundle.js");
// console.log(fs.readFileSync(a, "utf-8"));

console.log(
  `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/Typewriter.css" />
    <title>ホームページ</title>
  </head>
  <body>
    ${render(root)}
  </body>
</html>
`
);

// import { cfg } from "./config";

// if (cfg.grabMouse) {
//   chrome.storage.sync.get(["newPage"], (result) => {
//     if (result.newPage) {
//       chrome.tabs.create({ url: "index.html" }, null);
//       window.close();
//       chrome.storage.sync.set({ newPage: false }, null);
//     } else {
//       chrome.storage.sync.set({ newPage: true }, null);
//     }
//   });
// }

// if (cfg.startWithFocusOnSearchBar) {
//   document.getElementById("input_box").focus();
// }

// if (!cfg.zenMode) {
//   import("./links").then();
// } else {
//   document.getElementById("root").style.opacity = "0";
// }
// import "./modes.ts";

// import "./keyHandler.ts";
// import "./searchHandler.ts";
