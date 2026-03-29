function generatePoem(event) {
  event.preventDefault();
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
