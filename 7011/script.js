const audio = new Audio("BottomOfTheRiver-CricketsIntro.mp3");
const body = document.getElementById("body");

let isPlaying = false;


document.addEventListener("click", function () {
    if (!isPlaying) {
      playAudio();
      audio.volume = 0.2;
    } else {
      stopAudio();
    }
    console.log("Do you hear the crickets?");
  });