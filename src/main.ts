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

beeButton.addEventListener("click", () => honey++);

let lastTime: number | undefined;

function update(time: number) {
  if (lastTime !== undefined) {
    honey += (time - lastTime) / 1000;
  }
  lastTime = time;
  honeyDisplay.textContent = `${Math.floor(honey)} 🍯`;
  requestAnimationFrame(update);
}

requestAnimationFrame(update);

app.append(heading, beeButton, honeyDisplay);
