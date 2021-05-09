const config = {
  links: {
    School: {
      hotkey: "KeyS",
      links: {
        Canvas: { hotkey: "KeyC", link: "https://lcisd.instructure.com/" },
        Office: { hotkey: "KeyO", link: "https://www.office.com/?auth=2" },
        "TAMU NSC": {
          hotkey: "KeyN",
          link: "https://applicant.tamu.edu/NSC/Applicant/NscRegistered",
        },
      },
    },
    Git: {
      hotkey: "KeyG",
      links: {
        Repos: "https://github.com/denizat?tab=repositories",
      },
    },
    Social: {
      hotkey: "KeyM",
      links: {
        Gmail: "https://mail.google.com/mail/u/0/#inbox",
      },
    },
  },

  modes: {
    "G**gle": {
      hotkey: "KeyG",
      link: "https://google.com/search",
    },
    "Duck Duck Go": { hotkey: "KeyD", link: "https://www.duckduckgo.com/" },
    Searx: { hotkey: "KeyS", link: "https://searx.xyz/" },
    "Arch Linux": { hotkey: "KeyA", prefix: "Arch Linux" },
  },
};

let lastKey = "";
document.addEventListener("keypress", (key) => {
  // If the input box is not focused
  if (document.activeElement.id !== "input_box") {
    if (lastKey === "KeyM") {
      for (const hotkey in config.modes) {
        if (config.modes[hotkey].hotkey === key.code) {
          document.getElementById("mode").value = config.modes[hotkey].link;
          break;
        }
      }
      lastKey = undefined;
    } else if (lastKey === "KeyL") {
      //   for (const link in config.links) {
      //     if (config.modes[link].hotkey === key.code) {
      //       break;
      //     }
      //   }
    } else {
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
        default:
          lastKey = undefined;
          break;
      }
    }
  }
});

let mode = document.getElementById("mode");
for (const key in config.modes) {
  let opt = document.createElement("option");
  opt.setAttribute("value", config.modes[key].link);
  opt.innerHTML = `${key} [${config.modes[key].hotkey[3].toLowerCase()}]`;
  mode.appendChild(opt);
}

// I probably should have just used a table lol

// This is just shorthand
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

  let items = Object.keys(ln[key]);
  for (let i = 0; i < max; i++) {
    let link = document.createElement("a");
    if (items[i]) {
      link.setAttribute("href", ln[key].links[items[i]].link);
      link.innerHTML = items[i];
      link.className = "link";
    } else {
      link.className = "link null";
      link.innerHTML = "link null";
    }
    col.appendChild(link);
  }
  container.appendChild(col);
}
