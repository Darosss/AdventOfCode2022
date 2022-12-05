const fs = require("fs");
const { EOL } = require("os");

function getFileLines(fileName) {
  return fs.readFileSync(fileName, { encoding: "utf8", flag: "r" }).split("\n");
}

function findMostCalories(fileName) {
  const file = getFileLines(fileName);
  const fileLen = file.length;
  let sum = 0;
  let sumMax = 0;

  for (let i = 0; i < fileLen; i++) {
    if (file[i].length > 1) {
      sum += parseInt(file[i]);
    } else {
      if (sum > sumMax) sumMax = sum;
      sum = 0;
    }
  }
  return sumMax;
}

console.log(findMostCalories("data.txt"));
