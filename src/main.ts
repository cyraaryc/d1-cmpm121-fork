const app = document.querySelector<HTMLElement>("#app")!;

let honey = 0;
let honeySecond = 1;
const workerCost = 10;

const heading = document.createElement("h1");
heading.textContent = "Bee Clicker game";

const beeButton = document.createElement("button");
beeButton.id = "bee-button";
beeButton.textContent = "🐝";
beeButton.setAttribute("aria-label", "Get honey");

const honeyDisplay = document.createElement("p");
honeyDisplay.id = "honey-display";

const workerCard = document.createElement("div");
workerCard.className = "upgrade";
workerCard.innerHTML = `
  <h2>Worker</h2>
  <p>+1 🍯/s</p>
  <div class="upgrade-emoji">🐝</div>
  <p>Cost: <strong>${workerCost} 🍯</strong></p>
  <button>Buy</button>
`;
const workerButton = workerCard.querySelector("button")!;

beeButton.addEventListener("click", () => honey++);

workerButton.addEventListener("click", () => {
  if (honey >= workerCost) {
    honey -= workerCost;
    honeySecond++;
  }
});

let lastTime: number | undefined;

function update(time: number) {
  if (lastTime !== undefined) {
    honey += honeySecond * (time - lastTime) / 1000;
  }
  lastTime = time;
  honeyDisplay.textContent = `${Math.floor(honey)} 🍯`;
  workerButton.disabled = honey < workerCost;
  requestAnimationFrame(update);
}

requestAnimationFrame(update);

app.append(heading, beeButton, honeyDisplay, workerCard);
