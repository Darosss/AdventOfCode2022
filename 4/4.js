const fs = require("fs");

function getFile(fileName) {
  return fs.readFileSync(fileName, { encoding: "utf8", flag: "r" }).split("\n");
}

function getFilledGroups(fileName) {
  const file = getFile(fileName);
  const fileLen = file.length;

  let filledGroups = 0;

  for (let i = 0; i < fileLen; i++) {
    let splitGroups = file[i].trim().split(",");

    let group1 = splitGroups[0].split("-");
    let group2 = splitGroups[1].split("-");

    let startFirst = parseInt(group1[0]);
    let endFirst = parseInt(group1[1]);
    let startSecond = parseInt(group2[0]);
    let endSecond = parseInt(group2[1]);

    if (
      (startSecond >= startFirst && endSecond <= endFirst) ||
      (startFirst >= startSecond && endFirst <= endSecond)
    ) {
      filledGroups++;
    }
  }
  return filledGroups;
}

console.log(getFilledGroups("data.txt"));
