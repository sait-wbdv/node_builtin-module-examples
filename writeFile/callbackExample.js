"use strict";
const fs = require("node:fs");

const content = "Content for the callback function";
const fileName = "text.txt";

console.time("callbackWrite");
fs.writeFile(fileName, content, (err) => {
  if (err) throw err;
  console.log("Successfull write");
});

console.timeEnd("callbackWrite");
