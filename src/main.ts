const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "Bee Clicker game";

const beeButton = document.createElement("button");
beeButton.id = "bee-button";
beeButton.textContent = "🐝";
beeButton.setAttribute("aria-label", "Get honey");

beeButton.addEventListener("click", () => {
  console.log("Buzz");
});

app.append(heading, beeButton);
