const respawn = (obj) => {
  player.style.transition = "none";
  monster.style.transition = "none";
  monster.style.display = "block";
  player.style.left = `${positionStart}%`;
  monster.style.right = `${positionStart}%`;
  monster.src = obj.monsterRun;
};
const resetAll = (skin) => {
  let run = getRandMon();
  respawn(run);
  setTimeout(() => {
    startGame(run, skin);
  }, 500);
};
const getRandMon = () => {
  const monsters = getMonster();
  randIndex = Math.floor(Math.random() * monsters.length);
  index = monsters[randIndex];
  return index;
};
/*round calculation*/
const roundCount = () => {
  newRound++;
  document.getElementById("playerRound").innerHTML = `${newRound}`;
  return newRound;
};