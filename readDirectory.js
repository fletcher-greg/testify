const fs = require("fs");
const { join } = require("path");
// todo, read all files with test keyword and add them to the array to run
let allFiles = fs.readdirSync(join(__dirname, "/tests")).map((d) => d);

let testFiles = allFiles.filter((file) => file.includes(".test."));

console.log(allFiles.length === testFiles);
testFiles.map((t) => require(join(__dirname, `/tests/${t}`)));
