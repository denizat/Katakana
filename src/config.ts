export type Link = `http${string}`;
export type Hotkey = `Key${string}`;
export type Row = { name: string; hotkey?: Hotkey; link: Link };
export type Column = { name: string; hotkey: Hotkey; rows: Row[] };
type BookMarks = Column[];
interface Mode {
  name: string;
  hotkey: Hotkey;
  linkOrPrefix: string;
}
// type Modes = { name: string; hotkey: Hotkey; linkOrPrefix: URL | string }[];
type Modes = Mode[];

class Config {
  bookMarks: BookMarks = [];
  searchModes: Modes = [];
  // This is the link that is first loaded for the search bar.
  // ADD PREFIX HANDLER
  defaultSearchLink: string;

  addColumn(columnName: string, columnHotkey: Hotkey) {
    this.bookMarks.push({
      name: columnName,
      hotkey: columnHotkey,
      rows: [],
    });
  }
  addRow(rowName: string, rowHotkey: Hotkey, rowLink: Link) {
    this.bookMarks[this.bookMarks.length - 1].rows.push({
      name: rowName,
      hotkey: rowHotkey,
      link: rowLink,
    });
  }
  addMode(modeName, modeHotkey: Hotkey, modeLinkOrPrefix) {
    this.searchModes.push({
      name: modeName,
      hotkey: modeHotkey,
      linkOrPrefix: modeLinkOrPrefix,
    });
  }
}

const config = new Config();

/**
 * Can have aliases like:
 * const ac = config.addColumn
 * const ar = config.addRow
 * const am = config.addMode
 */

config.addColumn("School", "KeyS");
config.addRow("Canvas", "KeyC", "https://lcisd.instructure.com/");
config.addRow("Office", "KeyO", "https://www.office.com/?auth=2");
config.addRow(
  "TAMU NSC",
  "KeyT",
  "https://applicant.tamu.edu/NSC/Applicant/NscRegistered"
);

config.addColumn("Git", "KeyG");
config.addRow("Repos", "KeyR", "https://github.com/denizat?tab=repositories");

config.addColumn("Social", "KeyM");
config.addRow("Gmail", "KeyM", "https://github.com/denizat?tab=repositories");

config.addMode("G**GLE", "KeyG", "https://google.com/search?q=");
config.addMode("Searx", "KeyS", "https://searx.info/search?q=");
config.addMode("Duck Duck Go", "KeyD", "https://duckduckgo.com/?q=");
config.addMode("Arch Linux", "KeyA", "Arch Linux ");
config.addMode("Typescript", "KeyT", "Typescript ");

// config.defaultSearchLink = "https://duckduckgo.com/";
config.defaultSearchLink = config.searchModes[0].linkOrPrefix;

export const cfg = config;
