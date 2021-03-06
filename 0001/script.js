const card = document.querySelector(".card__inner");
const image = document.querySelector(".card__face--back");
const tarot = document.querySelector(".hermit");
const cardTitle = document.querySelector('.card__text--title');
const cardAbout = document.querySelector('.card__text--about');
const btn = document.querySelector('.hanged_man');
const bull = document.querySelector('.theBull');


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
  "THE JOURNEY"
];

let isFlipped = false;
let photoIndex;

// Picks random photo index
function randomNumber() {
  let randomNum = Math.floor(Math.random() * photoArray.length);
  // use when Testing The Hanged Man
  // let randomNum = 2

  console.log(randomNum);
  photoIndex = randomNum;
  
}
// Load picture on initial page load
randomNumber();
loadPicture(photoArray[photoIndex]);
getPhototitle(photoArray[photoIndex])

function loadPicture(photo) {
  console.log(`title ${photo}`);
  tarot.src = `../img/${photo}.png`;
}

function getPhototitle(photo) {
  let title = photo;
  console.log(title);
}

function flipTheCard() {
    card.classList.toggle("is-flipped");
}

// Event listener for clicks
card.addEventListener("click", function () {
  if (!isFlipped) {

    // TAROT card face is showing
    isFlipped = true;
    let newCardTitle = cardTitle.innerHTML = photoArray[photoIndex];
    flipTheCard();
    loadPicture(photoArray[photoIndex]);

    // create hanged man btn
    if (newCardTitle === "THE HANGED MAN") {
        bull.classList.add('visible')
    } else if (newCardTitle !== "THE HANGED MAN") {
    }
    cardAbout.innerHTML = "";

  } else if (isFlipped) {

    // TAROT card face is not showing
    randomNumber();
    cardTitle.innerHTML = "&nbsp";
    isFlipped = false;
    flipTheCard();

  }
  console.log(`is the card flipped ${isFlipped}`);
});
