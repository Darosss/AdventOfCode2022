const fs = require("fs");

function getFile(fileName) {
  return fs.readFileSync(fileName, { encoding: "utf8", flag: "r" }).split("\n");
}

function checkRPSCondition(npc, player) {
  const RPS = {
    A: "rock",
    B: "paper",
    C: "scissors",
    X: ["rock", 1],
    Y: ["paper", 2],
    Z: ["scissors", 3],
  };

  let npcHand = RPS[npc];
  let playerHand = RPS[player];
  let score = playerHand[1];

  if (npcHand === playerHand[0]) score += 3;
  else if (
    !(
      (npcHand === "rock" && playerHand[0] === "scissors") ||
      (npcHand === "scissors" && playerHand[0] === "paper") ||
      (npcHand === "paper" && playerHand[0] === "rock")
    )
  ) {
    score += 6;
  }

  return score;
}

function getTotalScore(fileName) {
  const file = getFile(fileName);
  const fileLen = file.length;

  let score = 0;

  for (let i = 0; i < fileLen; i++) {
    if (file[i].length > 1) {
      let choices = file[i].replace(/\r/g, "").split(" ");
      score += checkRPSCondition(choices[0], choices[1]);
    }
  }
  return score;
}

console.log(getTotalScore("data.txt"));
