
const blurry = document.querySelector('#backgroundGIF');
  let load = 0;
  let int = setInterval(blurring, 30)
  function blurring(){
  load++;
    if (load > 99){
    clearInterval(int)
    }
    blurry.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
  }
  
  const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
  /* AUDIO SCRIPT */
  const audio = new Audio("https://static1.squarespace.com/static/60046592044342497f59ed79/606db93b02bfcf3eb6224e19/606db96608764807f0d3f24d/1617803623431/Walking-through-+leaves-sound-effect.mp3");
const body = document.getElementById("body");
const blurryBackground = document.querySelector(".blurryBG")
 
  let isPlaying = false;

function playAudio() {
  audio.play();
  audio.loop = true;
  isPlaying = true;
}
function stopAudio() {
  audio.pause();
  isPlaying = false;
}

blurry.addEventListener("click", function () {
  if (!isPlaying) {
    playAudio();
    audio.volume = 0.1;
  } else {
    stopAudio();
  }
  console.log("We are walking through the woods");
});
  
  /* TAROT SCRIPT */
const card = document.querySelector(".card__inner");
const image = document.querySelector(".card__face--back");
const cardBack = document.querySelector('.card__face--front')
const tarot = document.querySelector(".hermit");
const cardTitle = document.querySelector('.card__text--title');
const cardAbout = document.querySelector('.card__text--about');
const btn = document.querySelector('.hanged_man');
const bull = document.querySelector('.theBull');
const cardPartTwo = document.querySelector('.card__back--img');

  
// Tarot Cards
const photoArray = [
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726896758-F3V6CI8YRZCTIUAWC4HW/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/THE+HERMIT.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726901022-5KNRWZ8OAQEF4I9X6VAA/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/WHEEL+OF+FORTUNE.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726896441-3ZQ4TKIMPZLGDDQ2JYIL/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/THE+HANGED+MAN.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726894101-1K3R70C3G3SYOC73RV4M/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/STRENGTH.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726894531-XRTJCKBRUF1RGFPHIXF1/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/TEMPERANCE.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726898122-0IXFQIUMOS9K42PPJZ2V/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/THE+LOVERS.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726895313-8PWLM7UBS9HZ1REYDJFH/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/THE+EMPRESS.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726899531-SAYNCO0I0OGWR4YWWQLS/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/THE+STAR.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726892103-4ZOWDMY5NVXX8OM896JV/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/JUDGEMENT.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726900716-YS7CME9ODFGC6P8VNDYC/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/THE+SUN.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726899384-KXAY01OBHOY8AGWAD4U9/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/THE+MAGICIAN.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726895768-EGANX3VKZZTYM13KDAU0/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/THE+FOOL.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/60046592044342497f59ed79/1617726898035-Y2U5YQFAH0203DOU2EWT/ke17ZwdGBToddI8pDm48kOq-PC1f5qmZiiTnxH1mLToUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIovYjSACNRy-_OjNJAGWzppDg8ypWYdfVG-RByz-6fgL1AluXxp0A1H8JSoFj-j8I/THE+JOURNEY.png?format=1500w", 
  "https://images.squarespace-cdn.com/content/60046592044342497f59ed79/1617809784655-ZTPJLZ286K3KLS6GEV8P/THE+BEAST.png?content-type=image%2Fpng"
];
  
const tarotBackOfCards = [
'https://images.squarespace-cdn.com/content/60046592044342497f59ed79/1617726892182-O8J58F965PEVY9UR3IME/backCardNew.png?content-type=image%2Fpng',
  'https://images.squarespace-cdn.com/content/60046592044342497f59ed79/1617809708720-L9HDICM5V6C7F2KH9OVN/Back+of+Card+Fingerprint+small.png?content-type=image%2Fpng'
];

let isFlipped = false;
let photoIndex;

// Picks random photo index
function randomNumber() {
  let randomNum = Math.floor(Math.random() * photoArray.length);
  // use when Testing The Hanged Man
  // let randomNum = 2
  console.log(`${randomNum} this is the randomNum`);
  photoIndex = randomNum;
}
  // Random number for new card background and beast sequece
  function randomNumberBeast() {
   let randomNumBeast = Math.floor(Math.random() * 10) 
}
  
// Load functions on initial page load
randomNumber();
loadPicture(photoArray[photoIndex]);
loadBackOfTarotCard();
getPhototitle(photoArray[photoIndex])

function loadBackOfTarotCard() {
  let thirteen = false;
  if (photoIndex === 13) {
  console.log(' the number IS 13 ');
    cardPartTwo.src = `${tarotBackOfCards[0]}`;
    console.log(`card source ${tarotBackOfCards[0]}`);
    thirteen = true;
  } else if (photoIndex != 13) {
  	console.log(' the number is NOT 13 ');
    cardPartTwo.src = `${tarotBackOfCards[1]}`;
    console.log(`card source ${tarotBackOfCards[1]}`)
    thirteen = false;
  }

}

  
function loadPicture(photo) {
  console.log(`title ${photo}`);
  tarot.src = `${photo}`;
  console.log(`cheers ${cardPartTwo.src}`)
}

function flipTheCard() {
    card.classList.toggle("is-flipped");
}

// Event listener for clicks
card.addEventListener("click", function () {
  console.log(thirteen)
  if (!isFlipped) {

    // TAROT card face is showing
    isFlipped = true;
    let newCardTitle = cardTitle.innerHTML = photoArray[photoIndex];
    flipTheCard();
    loadPicture(photoArray[photoIndex]);
loadBackOfTarotCard();
    cardAbout.innerHTML = "";

  } else if (isFlipped) {

    // TAROT card face is not showing
    loadBackOfTarotCard();
    randomNumber();
    cardTitle.innerHTML = "&nbsp";
    isFlipped = false;
    flipTheCard();
  }
  console.log(`is the card flipped ${isFlipped}`);
})
