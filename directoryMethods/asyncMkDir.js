"use strict";
const fs = require("node:fs/promises");

// This example uses a function argument to make it more powerful
async function mkDir(directoryPath) {
  try {
    // try to access directory
    await fs.access(directoryPath);
    console.log("Directory already exists.");
  } catch (err) {
    if (err.code === "ENOENT") {
      // if it couldn't access the file then...
      // create new directory
      await fs.mkdir(directoryPath, { recursive: true });
      return true;
    } else {
      // pass this out to the parent function for handling
      throw new Error(
        `Error creating directory. ${directoryPath}: ${err.message}`
      );
    }
  }
}

mkDir(".output");
