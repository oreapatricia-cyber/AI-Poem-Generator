function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Cuántas veces, amor, te amé sin verte y tal vez sin recuerdo,",
    autoStart: true,
    delay: 1,
  });

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML =
    "Cuántas veces, amor, te amé sin verte y tal vez sin recuerdo,";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
