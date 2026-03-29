function generatePoem(event) {
  event.preventDefault();
  let poemInputElement = document.querySelector("#poem-input");
  poemelElement.innerHtml = "Generating poem...";
  new Typewriter("#poem-display", {
    strings: "Cuántas veces, amor, te amé sin verte y tal vez sin recuerdo,",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
