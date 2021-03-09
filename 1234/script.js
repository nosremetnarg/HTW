let imgId = "fire";
let imgOnTime = 250;
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
