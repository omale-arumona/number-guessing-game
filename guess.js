let inputValue = document.getElementById("guess");
let submitBtn = document.getElementById("submit");
let message = document.getElementById("message");
let attempts = document.getElementById("attempts");
let checkInput = document.querySelector(".checkInput");

let attemptNum = 0;
let randomNum = Math.floor(Math.random() * 100 + 1);

inputValue.value = "";
let maxNumAttempt = 3;

submitBtn.addEventListener("click", checkGuess);

function checkGuess() {
  let regex = /[a-zA-Z\s\W]/g;
  let result = inputValue.value.search(regex);

  if (!result) {
    checkInput.textContent =
      "Number can not contain special characters, spaces, alphabets, or decimals!";
    checkInput.style.color = "red";
    inputValue.style.border = "1px solid red";
    return;
  } else {
    checkInput.textContent = "";
    checkInput.style.color = "";
    inputValue.style.border = "";
  }
  const userValue = Number(inputValue.value);
  attemptNum++;

  if (userValue === randomNum) {
    message.textContent = "Congratulations, you guessed it!";
    attempts.textContent = `Attempt: ${attemptNum}`;
    setTimeout(() => {
      location.reload();
      inputValue.value = "";
    }, 5000);
  } else if (userValue < randomNum) {
    message.textContent = `Too Low! You have ${
      maxNumAttempt - attemptNum
    } attempt(s) left. Try again`;
  } else {
    message.textContent = `Too High! You have ${
      maxNumAttempt - attemptNum
    } attempt(s) left. Try again`;
  }

  if (attemptNum === maxNumAttempt && userValue === randomNum) {
    message.textContent = "Congratulations, you guessed it!";
    attempts.textContent = `Attempt: ${attemptNum}`;
    setTimeout(() => {
      location.reload();
      inputValue.value = "";
    }, 5000);
  } else if (attemptNum === maxNumAttempt) {
    attempts.textContent = `Attempts: ${attemptNum}`;
    message.textContent =
      "You have reached the max attempts! Sorry, better luck next time.";
    setTimeout(() => {
      location.reload();
      inputValue.value = "";
    }, 4000);
  } else {
    attempts.textContent = `Attempt: ${attemptNum}`;
  }
}
