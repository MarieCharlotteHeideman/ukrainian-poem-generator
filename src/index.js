function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Hello World",
    autoStart: true,
    delay: 40,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
