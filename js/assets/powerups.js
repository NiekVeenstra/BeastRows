/*add coins*/
const addCoins = () => {
  let playerCoins = parseInt(document.getElementById("playerCoins").innerHTML);
  playerCoins += Math.floor(Math.random() * 3) + 1;
  document.getElementById("playerCoins").innerHTML = `${playerCoins}`;
};
/*level up*/
const levelUp = () => {
  let playerMoney = parseInt(document.getElementById("playerCoins").innerHTML);
  let levelUpCost = parseInt(document.getElementById("levelUpPrice").innerHTML);
  if (playerMoney >= levelUpCost) {
    playerMoney -= levelUpCost;
    clickDps += 10;
    levelUpCost++;
    document.getElementById("playerCoins").innerHTML = `${playerMoney}`;
    document.getElementById("levelUpPrice").innerHTML = `${levelUpCost}`;
    console.log("yeah BOY levelUp like crazy");
  } else {
    console.log("You poor bastard, go work for your money");
  }
  return clickDps;
};
/*power up*/
const powerUp = () => {
  let playerMoney = parseInt(document.getElementById("playerCoins").innerHTML);
  let powerUpCost = parseInt(document.getElementById("powerUpPrice").innerHTML);
  if (playerMoney >= powerUpCost) {
    playerMoney -= powerUpCost;
    dps += 20;
    powerUpCost++;
    document.getElementById("playerCoins").innerHTML = `${playerMoney}`;
    document.getElementById("powerUpPrice").innerHTML = `${powerUpCost}`;
    console.log("yeah BOY upgrade like crazy");
  } else {
    console.log("You poor bastard, go work for your money");
  }
  return dps;
};
/*add diamond*/
const addDiamonds = () => {
  let playerDiamonds = parseInt(document.getElementById("playerDiamonds").innerHTML);
  let chance = Math.random();
  if (chance <= 0.1) {
    playerDiamonds += Math.floor(Math.random() * 3) + 1;
    document.getElementById("playerDiamonds").innerHTML = `${playerDiamonds}`;
  }
};
/*shop*/
const shop = () => {
  let playerDiamonds = parseInt(document.getElementById("playerDiamonds").innerHTML);
  if (playerDiamonds >= 100) {
    playerDiamonds -= 100;
    document.getElementById("playerDiamonds").innerHTML = `${playerDiamonds}`;
  } else {
    console.log("You can't pay for that you poor fool");
  }
};