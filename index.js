function displayPoem(response) {
  console.log("#poem");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  let ApiKey = "94bo483a37241b0t66efb57f3864046e";
  let prompt = "Generate a poem about love in Spanish.";
  let context =
    "You are a poet expert who writes beautiful poems about love in Spanish. The poem should be romantic and emotional, capturing the essence of love in a heartfelt way, specially from great poets of Latin America. Use vivid imagery and expressive language to evoke strong emotions in the reader. The poem should be concise yet powerful, leaving a lasting impression on the audience. The tone should be passionate and sincere, conveying the intensity of love in a way that resonates with the reader.Make it shorter than 100 words.";

  let ApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${ApiKey}`;
  axios.get(ApiUrl).then(displayPoem);
  event.preventDefault();
  document.querySelector("#loading").style.display = "block";
  document.querySelector("#poem").innerHTML = "";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
