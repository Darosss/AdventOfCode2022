const fs = require("fs");

function getFile(fileName) {
  return fs.readFileSync(fileName, { encoding: "utf8", flag: "r" }).split("\n");
}

function findMost3Malories(calories) {
  let i = 0;
  let sumOfTop3Calories = 0;
  while (i < 3) {
    let maxCalorie = Math.max(...calories);
    sumOfTop3Calories += maxCalorie;

    calories.splice(calories.indexOf(maxCalorie), 1);
    i++;
  }
  return sumOfTop3Calories;
}

function findMostCalories(fileName) {
  const file = getFile(fileName);
  const fileLen = file.length;
  let sum = 0;
  let calories = [];
  for (let i = 0; i < fileLen; i++) {
    if (file[i].length > 1) {
      sum += parseInt(file[i]);
    } else {
      calories.push(sum);
      sum = 0;
    }
  }
  console.log("1. Part1: ", Math.max(...calories));
  console.log("2. Part2 ", findMost3Malories(calories));
}

findMostCalories("data.txt");
