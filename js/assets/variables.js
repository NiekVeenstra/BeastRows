const player = document.querySelector(".player");
const monster = document.querySelector(".monster");
const startButton = document.querySelector(".start-button");
const monsterHealth = document.querySelector(".health-bar-fluid");
const monsterHealthMobile = document.querySelector(".health-bar-fluid-mobile");
// Get the modal
const modal = document.getElementById("myModal");
const characters = document.getElementsByName("char");

// Get the button that opens the modal
const btn = document.getElementById("shop_btn");

// Get the <span> element that closes the modal
const span = document.getElementById("close_shop");

let positionFight = 33;
let positionStart = -19;

let newMonsterHealth = 100;
let newRound = 0;
let dps = 20;
let clickDps = 10;
let playerCoins = 0;
let playerDiamonds = 0;
