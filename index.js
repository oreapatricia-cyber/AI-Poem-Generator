function displayPoem(response) {
  console.log("#poem");

  document.querySelector("#poem").style.display = "block"; // <-- FIX

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
  });

  document.querySelector("#loading").style.display = "none";
}

function generatePoem(event) {
  let ApiKey = "94bo483a37241b0t66efb57f3864046e";
  let prompt = "Generate poems in English.";
  let context =
    "You are a poet expert who writes beautiful poems in English. The poem should be romantic and emotional. It can be love, food, jokes and more. The poem should be no more than 100 words";

  let ApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${ApiKey}`;
  axios.get(ApiUrl).then(displayPoem);
  event.preventDefault();
  document.querySelector("#loading").style.display = "block";
  document.querySelector("#poem").innerHTML = "";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
