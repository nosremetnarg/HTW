const audio = new Audio("../assets/BottomOfTheRiver-CricketsIntro.mp3");
const body = document.getElementById("body");

let isPlaying = false;

function playAudio() {
    audio.play();
    audio.loop = true
    isPlaying = true;
  }
  function stopAudio() {
    audio.pause();
    isPlaying = false;
  }

document.addEventListener("click", function () {
    if (!isPlaying) {
      playAudio();
      audio.volume = 0.2;
    } else {
      stopAudio();
    }
    console.log("Do you hear the crickets?");
  });