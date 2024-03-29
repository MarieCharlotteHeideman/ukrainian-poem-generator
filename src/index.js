function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "cd6b0ad6aoad4dt98fd5242505b3e7a3";
  let context =
    "You are a poet who loves to write poems. Your mission is to write a short poem consisting of 4 lines and in basic HTML. But, don't include an introduction or the word html in your answer please. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a Ukrainian poem in Ukrainian language and cyrillic script about ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  new Typewriter("#poem", {
    strings: `⏳ Cтворюю вірш для вас...`,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
