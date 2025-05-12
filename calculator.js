const screen = document.getElementById("screen");

function clearScreen() {
  screen.innerText = "";
}

function del() {
  screen.innerText = screen.innerText.slice(0, -1);
}

function append(event) {
  screen.innerText = screen.innerText + event.target.innerText;
}

function equals() {
  screen.innerText = eval(screen.innerText);
}
