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
    document.getElementById("fingerPrint").style.visibility = "hidden";
  }
}
let num;

function loadPicture(photo) {
  console.log(`title ${photo}`);
  tarot.src = `../img/${photo}.png`;
}

function loadBackPicture(photo) {
  if (photoIndex === 13) {
    console.log(photo);
    cardBack.src = `../img/${photo}.png`;
    thirteen = true;
    playBeastAudio();
    isBeast = true;
  } else {
  	console.log(' the number is NOT 13 ');
    cardBack.src = `../img/${photo}.png`;
    thirteen = false;
  }  
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
const blurry = document.querySelector(".card");
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

// // BLURRY Card
// const blurryCard = document.querySelector(".card");
// let loadTwo = 0;
// let intTwo = setInterval(blurringTwo, 30);
// function blurringTwo() {
//   loadTwo++;
//   if (loadTwo > 99) {
//     clearInterval(intTwo);
//   }
//   blurryCard.style.filter = `blur(${scaleTwo(loadTwo, 0, 100, 20, 0)}px)`;
// }
// const scaleTwo = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };

// AUDIO SCRIPT

const audio = new Audio(
  "https://static1.squarespace.com/static/60046592044342497f59ed79/606db93b02bfcf3eb6224e19/606dd619e155ef4f9f161694/1617810970946/Hunt+The+Witch+-+Woods+Walking+Towards+Hut+%28128%29.mp3"
);
const beastCardAudio = new Audio(
  "https://static1.squarespace.com/static/60046592044342497f59ed79/606db93b02bfcf3eb6224e19/606e120979b1f41fce8e38f2/1617826314510/Hunt+The+Witch+-+Bass+Drum+%26+Trash+Can+Hit.mp3"
);
const body = document.getElementById("body");
const blurryBackground = document.querySelector(".blurryBG");

let isPlaying = false;
let isBeast = false;

function playAudio() {
  audio.play();
  audio.loop = true;
  isPlaying = true;
}
function playBeastAudio(){
  beastCardAudio.play();
  isBeast = false;
}
function stopAudio() {
  audio.pause();
  isPlaying = false;
}
function playWoodsSound(evt) {
  evt.preventDefault();
   if (!isPlaying) {
     playAudio();
     audio.volume = 0.2;
   } else {
     stopAudio();
   }
   console.log("We are walking through the woods");
 }

blurryBackground.addEventListener("click", function () {
  if (!isPlaying) {
    playAudio();
    audio.volume = 0.1;
  } else {
    stopAudio();
  }
  console.log("We are walking through the woods");
});


// Load picture on initial page load
randomNumber();
loadPicture(photoArray[photoIndex]);
loadBackPicture(backOfCardArray[backOfCardIndex]);