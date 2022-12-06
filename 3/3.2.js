const fs = require("fs");

function getFile(fileName) {
  return fs.readFileSync(fileName, { encoding: "utf8", flag: "r" }).split("\n");
}

function getRepeatedItem(first, second, third) {
  let foundRepated = false;
  let i = 0;
  let repeated = null;
  while (!foundRepated || i >= first.length) {
    if (
      second.find((x) => x === first[i]) &&
      third.find((x) => x === first[i])
    ) {
      foundRepated = true;
      repeated = first[i].charCodeAt(0);
    } else {
      i++;
    }
  }
  return repeated;
}

function calculateItemPriority(charCode) {
  let sum = 0;
  if (charCode >= 97) {
    sum += charCode - 96;
  } else {
    sum += charCode - 38;
  }

  return sum;
}

function getSumOfPriorities(fileName) {
  const file = getFile(fileName);
  const fileLen = file.length;

  let sumOfProperties = 0;

  for (let i = 0; i < fileLen; i = i + 3) {
    let itemCharCode = getRepeatedItem(
      file[i].split(""),
      file[i + 1].split(""),
      file[i + 2].split("")
    );

    sumOfProperties += calculateItemPriority(itemCharCode);
  }
  return sumOfProperties;
}

console.log(getSumOfPriorities("test.txt"));
