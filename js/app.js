// Initialize game
startButton.addEventListener("click", () => {
  let getMons = getRandMon();
  let hero = getHero();
  startGame(getMons, hero);
});

function getRich() {
  let playerDiamonds = parseInt(document.getElementById("playerDiamonds").innerHTML);
  playerDiamonds += 100;
  playerCoins += 100;
  document.getElementById("playerDiamonds").innerHTML = `${playerDiamonds}`;
  document.getElementById("playerCoins").innerHTML = `${playerCoins}`;
}
