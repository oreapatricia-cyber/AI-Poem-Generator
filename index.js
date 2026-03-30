function displayPoem(response) {
  let poem = response.data.answer;

  // Clear previous poem
  document.querySelector("#poem-display").innerHTML = "";

  new Typewriter("#poem-display", {
    strings: poem,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let ApiKey = "94bo483a37241b0t66efb57f3864046e";
  let themeInput = document.querySelector("#theme").value;

  let prompt = `Write a beautiful and emotional poem in Spanish about the theme: "${themeInput}". 
  The poem should be expressive, poetic, and rich in imagery.`;

  let context =
    "You are a skilled poet who writes deep, romantic, and artistic poems in Spanish.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${ApiKey}`;

  axios
    .post(apiUrl, {
      prompt: prompt,
      context: context,
      key: ApiKey,
    })
    .then(displayPoem)
    .catch(function (error) {
      console.log("API error:", error);
    });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
