const fs = require("fs");
const { join } = require("path");
const colors = require("colors");
const tests = [];
// TODO feature --> put console.logs into arrary and call them at the end if they are less than 3
function test(description, cb) {
  tests.push({ description, cb });
}
module.exports = { test };
function runTests(extraFiles) {
  let errorCount = 0;

  tests.map((t) => {
    try {
      t.cb();

      console.log(`✅`, t.description);
    } catch (error) {
      errorCount += 1;
      console.log(`❌`, t.description);
      console.log(error.stack.red);
    }
  });

  if (errorCount === 0) {
    console.log("All Tests Passing! 🥳");
  }
  if (errorCount > 10) {
    console.log("So many Errors 😭".green);
  }
  if (extraFiles) {
    console.log(`
    Whoops! Do you have some files in test that don't follow the required format? 

    Correct format--> [filename].test.js 🎉

    Check to see if you've incorrectly named a file 🧐 `);
  }
}

///
// const files = process.argv.slice(2);
// global.test = test;

// todo, read all files with test keyword and add them to the array to run
let allFiles = fs.readdirSync(join(__dirname, "/tests")).map((d) => d);

let testFiles = allFiles.filter((file) => file.includes(".test."));
//  check for files that should not be in tests folder
let extraFiles = allFiles !== testFiles;

testFiles.map((t) => require(join(__dirname, `/tests/${t}`)));
runTests(extraFiles);
