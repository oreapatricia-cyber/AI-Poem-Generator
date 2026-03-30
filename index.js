function displayPoem(response) {}

function generatePoem(event) {
  let ApiKey = "94bo483a37241b0t66efb57f3864046e";
  let prompt = "";
  let context = "";

  let ApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${ApiKey}`;

  axios.get(ApiUrl).then(displayPoem);
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Cuántas veces, amor, te amé sin verte y tal vez sin recuerdo,",
    autoStart: true,
    delay: 1,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
