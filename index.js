function displayPoem(response) {
  new Typewriter("#poem-display", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let ApiKey = "94bo483a37241b0t66efb57f3864046e";
  let prompt = "Generate a Spanish poem about Love";
  let context =
    "You are a poet who writes beautiful poems about love in Spanish.";
  let APiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${ApiKey}`;
  axios.get(APiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
