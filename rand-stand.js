#!/usr/bin/env bun

import fs from "fs";
import path from "path";

function getUserHome() {
  // Return the value using process.env
  return process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
}

const userHomeDir = getUserHome();

fs.mkdirSync(path.join(userHomeDir, ".config", "rand-stand"), {recursive: true});
const checksumPath = path.join(userHomeDir, ".config", "rand-stand", "check-sum.txt");
const itemsPath = path.join(userHomeDir, ".config", "rand-stand", "items.json");

if (!fs.existsSync(checksumPath)) {
  fs.writeFileSync(checksumPath, "", { flag: "w+" });
}

if (!fs.existsSync(itemsPath)) {
  fs.writeFileSync(itemsPath, `{"first": [], "random": [], "last": []}`, { flag: "w+" });
}

const checksum = path.resolve(checksumPath);
const itemsFullPath = path.resolve(itemsPath);
const items = JSON.parse(fs.readFileSync(itemsFullPath, "utf8"));

if (Object.values(items).reduce((p, c) => p + c.length, 0) == 0){
  console.log("Looks like your `~/.config/rand-stand/items.json` is empty.");
  console.log("Go add some members first!");
  process.exit(1);
};

function mix({ first = [], random = [], last = [] }) {
  return first
    .concat(random.sort(() => (Math.random() > 0.5 ? 1 : -1)))
    .concat(last);
}

let folks = mix(items);
while (fs.readFileSync(checksum, { flag: "a+" }).toString() == folks.join("")) {
  folks = mix(items);
}

console.log(""); // some padding
folks.forEach((dude) => console.log(" ", dude));
console.log("");
fs.writeFileSync(checksum, folks.join(""), { flag: "w+" });
