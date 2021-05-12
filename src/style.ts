import { cfg } from "./config.js";

let head = document.getElementsByTagName("head")[0];
let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = cfg.fonts[Math.floor(Math.random() * cfg.fonts.length)];
link.media = "all";
head.appendChild(link);
