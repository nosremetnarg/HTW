const form = document.getElementById("form");
const answer = document.getElementById("answer");
const smallAnswer = document.getElementById("small");
// const proceedBtn = document.querySelector('link-btn')
// document.getElementById('link-btn').style.pointerEvents = 'none';

// Show input Error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }
  
  //Show success outline
  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    document.getElementById("link-btn").style.visibility = "visible";
    // answer.style.backgroundColor = "yellow"
  }
  
  // Event Listener
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const noWhiteSpace = answer.value.replace(/\s+/g, '')
  console.log(noWhiteSpace);
  
  if (noWhiteSpace.toLowerCase() != "huntthewitch") {
    showError(answer, 'Try Again')
  } else {
    showSuccess(answer)
  }
  })

  

  
  