"use strict";
const fs = require("node:fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf8", flag: "r" });

console.log(data);
