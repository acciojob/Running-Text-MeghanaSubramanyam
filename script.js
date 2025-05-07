const input = document.getElementById("speed");
const textElement = document.getElementById("text");

const message = "We love Programming!";
let currentTimeouts = [];

function renderText() {
  // Clear previous timeouts
  currentTimeouts.forEach(timeout => clearTimeout(timeout));
  currentTimeouts = [];
  textElement.textContent = "";

  let speed = parseInt(input.value);
  if (isNaN(speed) || speed < 1 || speed > 10) return;

  const delay = 500 / speed;

  let partialText = "";

  for (let i = 0; i < message.length; i++) {
    const timeoutId = setTimeout(() => {
      partialText += message[i];
      textElement.textContent = partialText;
    }, i * delay);
    currentTimeouts.push(timeoutId);
  }
}

// Run on input and on load
input.addEventListener("input", renderText);
window.addEventListener("DOMContentLoaded", renderText);
