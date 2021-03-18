const getMonster = () => {
  // Monster animations.
  return [
    {
      name: "monster1",
      monsterRun: "https://i.postimg.cc/9MvwxWJH/ezgif-com-gif-maker-6.gif",
      monsterHit: "https://i.postimg.cc/9fg77P9M/ezgif-com-gif-maker-5.gif",
      monsterDead: "https://i.postimg.cc/zBLRSLwk/ezgif-com-gif-maker-4.gif",
    },
    {
      name: "monster2",
      monsterRun: "https://i.postimg.cc/HLWB4th1/ezgif-com-gif-maker-9.gif",
      monsterHit: "https://i.postimg.cc/vZsPDy7B/ezgif-com-gif-maker-8.gif",
      monsterDead: "https://i.postimg.cc/K8D0MWQ5/ezgif-com-gif-maker-7.gif",
    },
    {
      name: "monster3",
      monsterRun: "https://i.postimg.cc/Dfc0RdCM/ezgif-com-gif-maker-18.gif",
      monsterHit: "https://i.postimg.cc/wTTMzyZT/ezgif-com-gif-maker-17.gif",
      monsterDead: "https://i.postimg.cc/m2XDgZW3/ezgif-com-gif-maker-16.gif",
    },
    {
      name: "monster4",
      monsterRun: "https://i.postimg.cc/tCt3SxPq/ezgif-com-gif-maker-12.gif",
      monsterHit: "https://i.postimg.cc/02qG0fzX/ezgif-com-gif-maker-11.gif",
      monsterDead: "https://i.postimg.cc/sfW9W8gZ/ezgif-com-gif-maker-10.gif",
    },
    {
      name: "monster5",
      monsterRun: "https://i.postimg.cc/Kc73xyYQ/ezgif-com-gif-maker-15.gif",
      monsterHit: "https://i.postimg.cc/4yGKVWWz/ezgif-com-gif-maker-14.gif",
      monsterDead: "https://i.postimg.cc/tJzs5Fc8/ezgif-com-gif-maker-13.gif",
    },
    {
      name: "monster6",
      monsterRun: "https://i.postimg.cc/rsd8xsTC/ezgif-com-gif-maker.gif",
      monsterHit: "https://i.postimg.cc/FsqYQcFh/ezgif-com-gif-maker-3.gif",
      monsterDead: "https://i.postimg.cc/9QrydC0Q/ezgif-com-gif-maker-2.gif",
    },
  ];
};

const getHero = () => {
  return [
    {
      name: "barbarian",
      heroRun: "https://i.postimg.cc/PxQD96vF/barbarian-1-run.gif",
      heroHit: "https://i.postimg.cc/YCGtNsHH/barbarian-1-attack.gif",
    },
    {
      name: "orc",
      heroRun: "https://i.postimg.cc/RFjv5pYF/orc-1-run.gif",
      heroHit: "https://i.postimg.cc/RF3vYxXy/orc-1-attack2.gif",
    },
    {
      name: "princess",
      heroRun: "https://i.postimg.cc/2yKH8Rwh/princess-run.gif",
      heroHit: "https://i.postimg.cc/8c5KSPhT/princess-attack.gif",
    },
    {
      name: "knight",
      heroRun: "https://i.postimg.cc/ZY7r38dq/soldier-run.gif",
      heroHit: "https://i.postimg.cc/WzHgvVvZ/soldier-attack.gif",
    },
  ];
};

for (let character of characters) {
  character.addEventListener("click", char);
  // When the user clicks on the Hero, close the modal
  character.onclick = function () {
    modal.style.display = "none";
  };
}
function char() {
  let playerDiamonds = parseInt(document.getElementById("playerDiamonds").innerHTML);
  if (playerDiamonds >= 100) {
    if (this.id == "orc") {
      document.getElementById("selectedChar").innerHTML = 1;
    }
    if (this.id == "princess") {
      document.getElementById("selectedChar").innerHTML = 2;
    }
    if (this.id == "knight") {
      document.getElementById("selectedChar").innerHTML = 3;
    }
    shop();
    console.log("in the if statement");
  } else {
    alert("Not enough diamonds");
  }
}