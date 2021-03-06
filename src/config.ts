// Need to learn how to use regex with types.
export type Link = `http${string}`;
export type Hotkey = string;
export type Row = {
  name: string;
  hotkey?: Hotkey;
  link: Link;
  hidden: boolean;
};
export type Column = {
  name: string;
  hotkey: Hotkey;
  rows: Row[];
  hidden: boolean;
};
type BookMarks = Column[];
interface Mode {
  name: string;
  hotkey: Hotkey;
  linkOrPrefix: string;
  hidden: boolean;
}
type Modes = Mode[];

class Config {
  bookMarks: BookMarks = [];
  searchModes: Modes = [];
  defaultSearchLink: string;
  grabMouse: boolean;
  startWithFocusOnSearchBar: boolean;

  addColumn(
    columnName: string,
    columnHotkey: Hotkey,
    columnHidden: boolean = false
  ) {
    this.bookMarks.push({
      name: columnName,
      hotkey: columnHotkey,
      rows: [],
      hidden: columnHidden,
    });
  }
  addRow(
    rowName: string,
    rowHotkey: Hotkey,
    rowLink: Link,
    rowHidden: boolean = false
  ) {
    this.bookMarks[this.bookMarks.length - 1].rows.push({
      name: rowName,
      hotkey: rowHotkey,
      link: rowLink,
      hidden: rowHidden,
    });
  }
  addMode(
    modeName,
    modeHotkey: Hotkey,
    modeLinkOrPrefix,
    modeHidden: boolean = false
  ) {
    this.searchModes.push({
      name: modeName,
      hotkey: modeHotkey,
      linkOrPrefix: modeLinkOrPrefix,
      hidden: modeHidden,
    });
  }

  zenMode: boolean;

  styles: string[];
}

const config = new Config();

/**
 * Can have aliases like:
 * const ac = config.addColumn
 * const ar = config.addRow
 * const am = config.addMode
 */

config.addColumn("School", "s");
config.addRow("Canvas", "c", "https://lcisd.instructure.com/");
config.addRow("Office", "o", "https://www.office.com/?auth=2");
config.addRow(
  "TAMU NSC",
  "t",
  "https://applicant.tamu.edu/NSC/Applicant/NscRegistered"
);

config.addColumn("Git", "g", true);
config.addRow("Repos", "r", "https://github.com/denizat?tab=repositories");

config.addColumn("Social", "m");
config.addRow("Gmail", "m", "https://mail.google.com/mail/u/0/#inbox");

config.addMode("G**GLE", "g", "https://google.com/search?q=", true);
config.addMode("Searx", "s", "https://searx.info/search?q=");
config.addMode("Duck Duck Go", "d", "https://duckduckgo.com/?q=");
config.addMode("Arch Linux", "a", "Arch Linux ");
config.addMode("Typescript", "t", "Typescript ");

// config.defaultSearchLink = "https://duckduckgo.com/";
config.defaultSearchLink = config.searchModes[0].linkOrPrefix;

config.zenMode = false;
config.grabMouse = true;
config.startWithFocusOnSearchBar = true;

export const cfg = config;
