const fs = require("fs");

function getFile(fileName) {
  return fs.readFileSync(fileName, { encoding: "utf8", flag: "r" }).split("\n");
}

function getRepeatedItem(first, second) {
  let foundRepated = false;
  let i = 0;
  let repeated = null;
  while (!foundRepated || i >= first.length) {
    if (second.find((x) => x === first[i])) {
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

  for (let i = 0; i < fileLen; i++) {
    let itemsLen = file[i].length - 1;
    let itemsLenHalf = Math.ceil(itemsLen / 2);
    let firstComp = file[i].slice(0, itemsLenHalf).split("");
    let secondComp = file[i].slice(itemsLenHalf).split("");

    let itemCharCode = getRepeatedItem(firstComp, secondComp);

    sumOfProperties += calculateItemPriority(itemCharCode);
  }
  return sumOfProperties;
}

console.log(getSumOfPriorities("data.txt"));
