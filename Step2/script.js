const wordEl = document.getElementById("word");
const wrongLettersEl = document.querySelector(".wrong-letters");
const finalMessage = document.getElementById("final-message");
const notification = document.getElementById("notification-container");
const popup = document.getElementById("popup-container");
const mobAudio = new Audio(
  "https://static1.squarespace.com/static/60046592044342497f59ed79/606db93b02bfcf3eb6224e19/60803a5b9d99fb68ef7de910/1619016337096/Hunt+The+Witch+-+Mob.mp3"
);
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

// Show notification
function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}
let wrongLetterCount = 0;
// Play Sounds for each wrong Answer
function wrongAnswerSounds() {
  if (wrongLetterCount === 1) {
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
