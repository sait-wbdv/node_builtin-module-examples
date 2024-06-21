"use strict";
const path = require("node:path");

const fileName = "newText.txt";
const dirName = ".output";

console.log("join dir + file: ", path.join(dirName, fileName));
console.log(path.resolve(fileName));
