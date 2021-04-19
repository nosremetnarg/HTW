const card = document.querySelector(".card__inner");
const cardBack = document.querySelector(".back");
const image = document.querySelector(".card__face--back");
const tarot = document.querySelector(".tarot");
const frontOfCard = document.querySelector(".card__face--front");

// Titles of Tarot Cards
const photoArray = [
  "THE HERMIT",
  "WHEEL OF FORTUNE",
  "THE HANGED MAN",
  "STRENGTH",
  "TEMPERANCE",
  "THE LOVERS",
  "THE EMPRESS",
  "THE STAR",
  "JUDGEMENT",
  "THE SUN",
  "THE MAGICIAN",
  "THE FOOL",
  "THE JOURNEY",
  "THE BEAST",
];

const backOfCardArray = ["backCardNew", "backCardFingerprint"];

let isFlipped = false;
let photoIndex;
let backOfCardIndex;
let thirteen = false;

// Picks random photo index
function randomNumber() {
  let randomNum = Math.floor(Math.random() * photoArray.length);
  //   let randomNum = 13;
  console.log(randomNum);
  photoIndex = randomNum;
  if (randomNum === 13) {
    backOfCardIndex = 1;
    document.getElementById("fingerPrint").style.visibility = "visible";
  } else {
    backOfCardIndex = 0;
  }
}
let num;
// Load picture on initial page load
randomNumber();
loadPicture(photoArray[photoIndex]);
loadBackPicture(backOfCardArray[backOfCardIndex]);



function loadPicture(photo) {
  console.log(`title ${photo}`);
  tarot.src = `../img/${photo}.png`;
}

function loadBackPicture(photo) {
  console.log(photo);
  cardBack.src = `../img/${photo}.png`;
}

function flipTheCard() {
  setTimeout(function () {
    card.classList.toggle("is-flipped");
  }, 150);
  // card.classList.toggle("is-flipped");
}

// Event listener for clicks
card.addEventListener("click", function () {
  if (!isFlipped) {
    // TAROT card face is showing
    isFlipped = true;
    flipTheCard();
    loadPicture(photoArray[photoIndex]);
    document.getElementById("backOfCard").style.opacity = 0.9;
    loadBackPicture(backOfCardArray[backOfCardIndex]);
    //  if (thirteen) {
    //     //  playBeastAudio()
    // }
  } else if (isFlipped) {
    // TAROT card face is not showing
    randomNumber();
    isFlipped = false;
    loadBackPicture(backOfCardArray[backOfCardIndex]);
    flipTheCard();
  }
  console.log(`is the card flipped ${isFlipped}`);
});

// BLURRY BACKGROUND
const blurry = document.querySelector("#backgroundGIF");
let load = 0;
let int = setInterval(blurring, 30);
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  blurry.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
