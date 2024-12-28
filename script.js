const buttonEle1 = document.getElementById("btn");

const diceEle1 = document.getElementById("dice");

const rollHistoryEle1 = document.getElementById("roll-history");
const histroyList = [];

function rollDice() {
  const rollRandom = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollRandom);
  diceEle1.innerHTML = diceFace;
  histroyList.unshift(rollRandom);
  updateRollHistory();
}

function updateRollHistory() {
  rollHistoryEle1.innerHTML = "";
  for (let i = 0; i < histroyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      histroyList[i]
   )}</span>`;
   rollHistoryEle1.appendChild(listItem);
  }

  
}

function getDiceFace(rollRandom) {
  switch (rollRandom) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

buttonEle1.addEventListener("click", () => {
  diceEle1.classList.add("roll-animation");
  setTimeout(() => {
    diceEle1.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
