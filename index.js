function displayPoem(response) {
  const poemBox = document.querySelector("#poem");
  const loading = document.querySelector("#loading");

  loading.style.display = "none"; // hide shimmer
  poemBox.style.display = "block"; // show poem box
  poemBox.innerHTML = ""; // clear previous poem

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  const loading = document.querySelector("#loading");
  const poemBox = document.querySelector("#poem");

  poemBox.style.display = "none"; // hide poem box while loading
  loading.style.display = "block"; // show shimmer

  let ApiKey = "94bo483a37241b0t66efb57f3864046e";
  let ApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${ApiKey}`;
  let themeInput = document.querySelector("#theme").value;

  let prompt = `Write a beautiful and emotional poem in Spanish about the theme: "${themeInput}". The poem should be expressive, poetic, and rich in imagery.`;

  let context =
    "You are a skilled poet who writes deep, romantic, and artistic poems in Spanish.";

  axios
    .get(ApiUrl)
    .then(displayPoem)
    .catch((error) => {
      loading.style.display = "none";
      poemBox.style.display = "block";
      poemBox.innerHTML = "";
    });
        prompt: prompt,
        context: context,
        key: ApiKey,
      },
    })
    .then(displayPoem)
    .catch((error) => {
      loading.style.display = "none";
      poemBox.style.display = "block";
      poemBox.innerHTML = "⚠️ Something went wrong. Please try again.";
      console.log(error);
    });
}

document
  .querySelector("#poem-generator-form")
  .addEventListener("submit", generatePoem);
