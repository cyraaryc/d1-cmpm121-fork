const app = document.querySelector<HTMLElement>("#app")!;

let honey = 0;

const heading = document.createElement("h1");
heading.textContent = "Bee Clicker game";

const beeButton = document.createElement("button");
beeButton.id = "bee-button";
beeButton.textContent = "🐝";
beeButton.setAttribute("aria-label", "Get honey");

const honeyDisplay = document.createElement("p");
honeyDisplay.id = "honey-display";
honeyDisplay.textContent = `${honey} 🍯`;

function addHoney(amount: number) {
  honey += amount;
  honeyDisplay.textContent = `${honey} 🍯`;
}

beeButton.addEventListener("click", () => addHoney(1));

setInterval(() => addHoney(1), 1000);

app.append(heading, beeButton, honeyDisplay);
