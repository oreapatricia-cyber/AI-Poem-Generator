function generatePoem(event) {
  event.preventDefault();
}

let poemformElement = document.QuerySelector("#poem-generator-form");
poemFormElement.addEventlistener("submit", generatePoem);
