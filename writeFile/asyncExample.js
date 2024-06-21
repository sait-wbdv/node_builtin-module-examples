"use strict";
const fs = require("node:fs/promises");

async function writeFile() {
  try {
    const content = "stuff that we want to write";
    await fs.writeFile("text.txt", content);
  } catch (err) {
    console.error(err);
  }
}

writeFile();
