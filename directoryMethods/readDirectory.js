"use strict";
const fs = require("node:fs");

const dirName = ".output";

fs.readdir(dirName, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
