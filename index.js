function displayPoem(response) {
    new Typewriter("#poem-display", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
}

function generatePoem(event) {
  event.preventDefault();
  let apikey="94bo483a37241b0t66efb57f3864046e";
  let ApiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`
  let poemInputElement = document.querySelector("#poem-input");
  poemelElement.innerHtml = "Generating poem...";
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
