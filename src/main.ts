const app = document.querySelector<HTMLElement>("#app")!;

let honey = 0;
let beeCount = 1;
const workerCost = 10;
const officeCost = 500;

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
  <p>+1 🍯</p>
  <div class="upgrade-emoji">🐝</div>
  <p>Cost: <strong>${workerCost} 🍯</strong></p>
  <button>Buy</button>
`;
const workerButton = workerCard.querySelector("button")!;

beeButton.addEventListener("click", () => {
  honey += beeCount;
});

workerButton.addEventListener("click", () => {
  if (honey >= workerCost) {
    honey -= workerCost;
    beeCount++;
  }
});

const officeCard = document.createElement("div");
officeCard.className = "upgrade";
officeCard.innerHTML = `
 <h2>Office Bee</h2>
 <p>+2 🍯</p>
 <div class="upgrade-emoji">🍯</div>
 <p>Cost: <strong>${officeCost} 🍯</strong></p>
 <button>Buy</button>
`;
const officeButton = officeCard.querySelector("button")!;

officeButton.addEventListener("click", () => {
  if (honey >= officeCost) {
    honey -= officeCost;
    beeCount += 10;
  }
});

officeCard.style.display = "none";

function update() {
  honeyDisplay.textContent = `${Math.floor(honey)} 🍯`;
  workerButton.disabled = honey < workerCost;
  officeButton.disabled = honey < officeCost;

  if (honey >= officeCost) {
    officeCard.style.display = "";
  }
  requestAnimationFrame(update);
}

requestAnimationFrame(update);

app.append(heading, beeButton, honeyDisplay, workerCard, officeCard);
