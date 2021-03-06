const wordEl = document.getElementById("word");
const wrongLettersEl = document.querySelector(".wrong-letters");
const finalMessage = document.getElementById("final-message");
const notification = document.getElementById("notification-container");
const popup = document.getElementById("popup-container");
const mobAudio = new Audio(
  "https://static1.squarespace.com/static/60046592044342497f59ed79/606db93b02bfcf3eb6224e19/60803a5b9d99fb68ef7de910/1619016337096/Hunt+The+Witch+-+Mob.mp3"
);
const draggingAudio = new Audio('https://static1.squarespace.com/static/60046592044342497f59ed79/606db93b02bfcf3eb6224e19/60803c7d4e46f67c7b203182/1619016838265/Hunt+The+Witch+-+Dragging.mp3');
const hammeringAudio = new Audio('https://static1.squarespace.com/static/60046592044342497f59ed79/606db93b02bfcf3eb6224e19/60803ebf00361404e3e7d040/1619017415032/Hunt+The+Witch+-+Hammering+Post.mp3');
const ropeAudio = new Audio('https://static1.squarespace.com/static/60046592044342497f59ed79/606db93b02bfcf3eb6224e19/608183f0a34a765b70df974f/1619100657986/Hunt+The+Witch+-+Rope.mp3');
const crowAudio = new Audio('https://static1.squarespace.com/static/60046592044342497f59ed79/606db93b02bfcf3eb6224e19/60803ae7be099e0c8d4f6e7c/1619016429775/Hunt+The+Witch+-+Crows.mp3');
const fireAudio = new Audio('https://static1.squarespace.com/static/60046592044342497f59ed79/606db93b02bfcf3eb6224e19/60803ad92ac9786e478e8225/1619016414712/Hunt+The+Witch+-+Raging+Fire.mp3');

const secretWord = "iwillneverdie";

const correctLetters = [];
const wrongLetters = [];

// Show word
function displayWord() {
  wordEl.innerHTML = `
      ${secretWord
        .split("")
        .map(
          (letter) => `
      <span class='letter'>
      ${correctLetters.includes(letter) ? letter : ""}
      </span>
      `
        )
        .join("")}
      `;
  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === secretWord) {
    finalMessage.innerText = "Congratulations! You Won!";
    popup.style.display = "flex";
  }
}

// Update wrong letters
function updateWrongLettersEl() {
  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
      `;
  // Check if player lost
  if (wrongLetters.length === 5) {
    finalMessage.innerText = "You Lost";
    popup.style.display = "flex";
  }
}
// Redirect function
function redirect() {
    setTimeout(() => {
        location.replace('https://www.deltarae.com')
    }, 10000)
}

// Show notification
function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}
let wrongLetterCount = 0;
// Play Sounds for each wrong Answer
function wrongAnswerSounds(wrongLetterCount) {
  if (wrongLetterCount === 1) {
      draggingAudio.play();
  } else if (wrongLetterCount === 2) {
    hammeringAudio.play();
  } else if (wrongLetterCount === 3) {
    ropeAudio.play();
  } else if (wrongLetterCount === 4) {
      crowAudio.play();
  } else if (wrongLetterCount === 5 ) {
      fireAudio.play();
    redirect();
  }
}

// Keydown letter press
window.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (secretWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetterCount++;
        wrongAnswerSounds(wrongLetterCount)
        wrongLetters.push(letter);
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
  console.log(`${wrongLetterCount} wrong guesses`);
});
let isPlaying = false;
function playAudio() {
  mobAudio.play();
  mobAudio.loop = true;
  isPlaying = true;
}
function stopAudio() {
  mobAudio.pause();
  isPlaying = false;
}

document.addEventListener("click", function () {
    if (!isPlaying) {
      playAudio();
      mobAudio.volume = 0.2;
    } else {
      stopAudio();
    }
    console.log("Do you hear the mob?");
  });

displayWord();
