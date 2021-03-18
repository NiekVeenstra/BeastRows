/*attack*/
const clickDamage = () => {
  let currentMonsterHp = parseInt(document.getElementById("hidden-hp").innerHTML);
  clickerDmg = clickDps;
  console.log(`your clickerdmg = ${clickerDmg}`);
  currentMonsterHp -= clickerDmg;
  document.getElementById("hidden-hp").innerHTML = `${currentMonsterHp}`;
  hpBarValue();
};
const attackPhase = (obj, skin) => {
  let round = document.getElementById("playerRound").innerHTML;
  let selectedChar = parseInt(document.getElementById("selectedChar").innerHTML);
  let deadMonster = obj.monsterDead;
  setTimeout(() => {
    console.log(skin[selectedChar].heroHit);
    player.src = skin[selectedChar].heroHit;
    round == 1
      ? (monster.src = "https://i.postimg.cc/9fg77P9M/ezgif-com-gif-maker-5.gif")
      : (monster.src = obj.monsterHit);
  }, 3000);
  setTimeout(() => {
    autoDps(dps, deadMonster, skin);
  }, 2000);
};
const autoDps = (playerDmg, deadMonster, skin) => {
  const healthCheck = setInterval(function () {
    let currentMonsterHp = parseInt(document.getElementById("hidden-hp").innerHTML);
    let round = document.getElementById("playerRound").innerHTML;
    let selectedChar = parseInt(document.getElementById("selectedChar").innerHTML);
    if (currentMonsterHp <= 0) {
      monsterHealth.style.width = `0%`;
      monsterHealthMobile.style.width = `0%`;
      player.src = skin[selectedChar].heroRun;
      round == 1
        ? (monster.src = "https://i.postimg.cc/zBLRSLwk/ezgif-com-gif-maker-4.gif")
        : (monster.src = deadMonster);
      setTimeout(() => {
        monster.style.display = "none";
      }, 1000);
      player.style.left = "100%";
      clearInterval(healthCheck);
      setTimeout(() => {
        resetAll(skin);
      }, 2600);
      addCoins();
      addDiamonds();
    } else {
      let damaged = damage(playerDmg);
      healthMon = damaged;
    }
  }, 1000);
};
const damage = (playerDmg) => {
  let currentMonsterHp = parseInt(document.getElementById("hidden-hp").innerHTML);
  currentMonsterHp -= playerDmg;
  document.getElementById("hidden-hp").innerHTML = `${currentMonsterHp}`;
  hpBarValue();
};