//your JS code here. If required.
const input = document.getElementById("speed");
const textDisplay = document.getElementById("text");
const message = "We love Programming!";
let intervalId;

function renderText() {
  clearInterval(intervalId);
  textDisplay.textContent = "";

  const speed = parseInt(input.value);
  if (isNaN(speed) || speed < 1 || speed > 10) return;

  const delay = 500 / speed;
  let index = 0;

  intervalId = setInterval(() => {
    textDisplay.textContent += message[index];
    index++;
    if (index === message.length) {
      clearInterval(intervalId);
    }
  }, delay);
}

// Trigger on input change
input.addEventListener("input", renderText);

// Initial render
renderText();
