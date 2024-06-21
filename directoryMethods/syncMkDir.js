"use strict";
const fs = require("node:fs");

const dirName = ".output";

function makeDirSync() {
  try {
    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName);
    } else {
      console.log("Directory already exists");
      return;
    }
  } catch (err) {
    console.error(err);
  }
}

makeDirSync();
