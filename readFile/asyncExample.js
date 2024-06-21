"use strict";
const fs = require("node:fs/promises");

async function readFile() {
  try {
    const fileToRead = "input.txt";
    const data = await fs.readFile(fileToRead, "utf-8");
    console.log(data);
  } catch (err) {
    console.error(`Error reading file: ${err}`);
  }
}

readFile();
