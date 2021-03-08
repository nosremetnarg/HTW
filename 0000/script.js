const logo2 = document.querySelectorAll('#huntTheWitchText path');
const text7011 = document.querySelectorAll(".text7011");
const body = document.querySelector('.body');

for (let i = 0; i < logo2.length; i++) {
    console.log(`Letter ${i + 1} is ${logo2[i].getTotalLength()}`);
}



body.addEventListener('click', function() {
    console.log("clicked")
    body.classList.remove(".body");
    body.style.background = "black";
    document.getElementById("text7011").classList.remove("text7011");
    document.getElementById("text7011").classList.add("text7011Black");
    document.getElementById("huntTheWitchText").style.opacity = 0;
})