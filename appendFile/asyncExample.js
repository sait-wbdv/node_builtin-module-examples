"use strict";
const fs = require("node:fs/promises");

const fileName = "text.txt";
const content = "Async Data appended \n";

async function appendToFile() {
  try {
    await fs.appendFile(fileName, content);
  } catch (err) {
    console.error(err);
  }
}

console.time("Async Append");
appendToFile();
console.timeEnd("Async Append");
