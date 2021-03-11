const audio = new Audio("../assets/BottomOfTheRiver-CricketsIntro.mp3");

const body = document.getElementById("body");
const moon = document.getElementById("moon");
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

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

  
document.addEventListener('click', function(e) {
  console.log(e)
  console.log("the moon is made of cheese")
})


btn.addEventListener("click", () => {
  search.classList.toggle('active');
  input.focus()
})