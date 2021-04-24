const wordEl = document.getElementById("word");
const wrongLettersEl = document.querySelector(".wrong-letters");
const finalMessage = document.getElementById("final-message");
const notification = document.getElementById("notification-container");
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
  // Display body parts
//   figureParts.forEach((part, index) => {
//     const errors = wrongLetters.length;

//     if (index < errors) {
//       part.style.display = "block";
//     } else {
//       part.style.display = "none";
//     }
//   });

  // Check if lostt

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
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

displayWord();