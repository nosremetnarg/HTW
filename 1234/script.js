const knockImage = document.getElementById("fire");

const form = document.getElementById("form");
const answer = document.getElementById("answer");



let imgId = "fire";
let imgOnTime = 1550;
let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
let imgOffTime = 5000;
window.onload = function () {
  // check for existence of objects we will use
  if (document.getElementById) {
    let ele = document.getElementById(imgId);
    if (ele && ele.style) {
      setTimeout("blinkImg()", imgOffTime);
    }
  }
};
function blinkImg() {
  let v,
    t,
    ele = document.getElementById(imgId);
  if (ele.style.visibility == "visible") {
    // hide it, then wait for imgOffTime
    v = "hidden";
    t = imgOffTime;
  } else {
    // show it, then wait for imgOnTime
    v = "visible";
    t = imgOnTime;
  }
  ele.style.visibility = v;
  setTimeout("blinkImg()", t);
}

let knockCount = 0;

document.addEventListener('click', function(e) {
  if(e.target.id === "fire") {
  knockCount++
  console.log(`Knocked on the door ${knockCount} times `)
    if (knockCount >= 3) {
    console.log("cue new video")
  }
  } 
  else {
    console.log("find the door")
  }
})

// Show input Error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show sucess outline
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Event Listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
console.log(answer.value);

if (answer.value.toLowerCase( ) != "mirror") {
  showError(answer, 'Try Again')
} else {
  showSuccess(answer)
}
})

