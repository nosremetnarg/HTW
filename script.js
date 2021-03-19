const form = document.getElementById("form");
const answer = document.getElementById("answer");
const smallAnswer = document.getElementById("small");
// const proceedBtn = document.querySelector('link-btn')

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
    document.getElementById('link-btn').style.visibility = "visible"
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


  
  