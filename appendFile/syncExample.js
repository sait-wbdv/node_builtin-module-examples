"use strict";
const fs = require("node:fs");

const content = "Some Content \n";
const fileName = "text.txt";

fs.appendFile(fileName, content, (err) => {
  if (err) {
    console.error(err);
  }
});
