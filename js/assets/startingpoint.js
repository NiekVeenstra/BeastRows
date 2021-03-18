/*start game*/
const startGame = (obj, skin) => {
  console.log(skin);
  let chosenMon = obj;
  transition();
  mobHp();
  attackPhase(chosenMon, skin);
};
const transition = () => {
  startButton.style.display = "none";
  player.style.transition = "all 3s linear";
  monster.style.transition = "all 3s linear";
  player.style.left = `${positionFight}%`;
  monster.style.right = `${positionFight}%`;
};
/*hp calculation */
const mobHp = () => {
  let roundNr = roundCount();
  let newMobHp = 100 * 1.1 ** roundNr;
  document.getElementById("hidden-hp").innerHTML = `${newMobHp}`;
  document.getElementById("hidden-max-hp").innerHTML = `${newMobHp}`;
  hpCalc(newMobHp);
};

const hpCalc = (newMobHp) => {
  monsterHealthMobile.style.width = `${(newMobHp / newMobHp) * 100}%`;
  monsterHealth.style.width = `${(newMobHp / newMobHp) * 100}%`;
};
/*update Hpvalue*/
const hpBarValue = () => {
  let currentMonsterHp = parseInt(document.getElementById("hidden-hp").innerHTML);
  let currentMaxMonsterHp = parseInt(document.getElementById("hidden-max-hp").innerHTML);
  monsterHealth.style.width = `${(currentMonsterHp / currentMaxMonsterHp) * 100}%`;
  monsterHealthMobile.style.width = `${(currentMonsterHp / currentMaxMonsterHp) * 100}%`;
};