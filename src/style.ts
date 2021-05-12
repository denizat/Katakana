import { cfg } from "./config";

let head = document.getElementsByTagName("head")[0];
let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = cfg.styles[Math.floor(Math.random() * cfg.styles.length)];
link.media = "all";
head.appendChild(link);
