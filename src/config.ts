export const config = {
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
        Repos: { link: "https://github.com/denizat?tab=repositories" },
      },
    },
    Social: {
      hotkey: "KeyM",
      links: {
        Gmail: { link: "https://mail.google.com/mail/u/0/#inbox" },
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
