"use strict";
const path = require("node:path");

const fileToRetrieveInfoAbout = ".output/text.txt";

console.log("dirname: ", path.dirname(fileToRetrieveInfoAbout));
// basename with extension
console.log("basename: ", path.basename(fileToRetrieveInfoAbout));
// basename without extension
console.log(
  "basename no extension: ",
  path.basename(fileToRetrieveInfoAbout, path.extname(fileToRetrieveInfoAbout))
);
console.log("extname: ", path.extname(fileToRetrieveInfoAbout));
