"use strict";
const fs = require("node:fs");

const newDirName = ".output";
const oldDirName = ".dist";

fs.rename(oldDirName, newDirName, (err) => {
  if (err) {
    console.error(err);
  }
  // done
});
