import { Element, render } from "@denizat/node_html";
import { links } from "./links.js";

const html = new Element("html");
html.appendChild(links);

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
    <div id="root">
    ${render(html)}
    ${inner}

          </div>
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
