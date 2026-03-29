function generatePoem(event) {
  event.preventDefault();
  let poemInputElement = document.querySelector("#poem-input");
  poemelElement.innerHtml = "Generating poem...";
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
