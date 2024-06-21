"use strict";
const fs = require("node:fs");

const dirName = ".output";

fs.mkdir(dirName, (err) => {
  if (err) {
    console.error(err);
  }
});
