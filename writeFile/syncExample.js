"use strict";
const fs = require("node:fs");

const content = "Sync example text content";
const fileName = "text.txt";

console.time("writeFileSync");
fs.writeFileSync(fileName, content, (err) => {
  if (err) {
    throw Error(err);
  }
});
console.timeEnd("writeFileSync");
