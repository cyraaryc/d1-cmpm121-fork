const app = document.querySelector<HTMLElement>("#app")!;

const gameTitle = "Bee Clicker game";
const honeySymbol = "🍯";

const workerUpgrade = {
  name: "Worker",
  gainPerBuy: 1,
  emoji: "🐝",
  cost: 10,
};

const officeUpgrade = {
  name: "Office Bee",
  gainPerBuy: 2,
  emoji: honeySymbol,
  cost: 40,
};

let honey = 0;
let beeCount = 1;

const heading = document.querySelector<HTMLHeadingElement>("#game-title")!;
const beeButton = document.querySelector<HTMLButtonElement>("#bee-button")!;
const honeyDisplay = document.querySelector<HTMLParagraphElement>("#honey-display")!;

const workerCard = document.querySelector<HTMLElement>("#worker-card")!;
const workerButton = workerCard.querySelector("button")!;

const officeCard = document.querySelector<HTMLElement>("#office-card")!;
const officeButton = officeCard.querySelector("button")!;

function renderUpgrade(card: HTMLElement, upgrade: typeof workerUpgrade | typeof officeUpgrade) {
  card.querySelector("h2")!.textContent = upgrade.name;
  card.querySelector("p")!.textContent = `+${upgrade.gainPerBuy} ${honeySymbol}`;
  card.querySelector(".upgrade-emoji")!.textContent = upgrade.emoji;
  card.querySelector("strong")!.textContent = `${upgrade.cost} ${honeySymbol}`;
}

heading.textContent = gameTitle;
renderUpgrade(workerCard, workerUpgrade);
renderUpgrade(officeCard, officeUpgrade);

beeButton.addEventListener("click", () => {
  honey += beeCount;
});

workerButton.addEventListener("click", () => {
  if (honey >= workerUpgrade.cost) {
    honey -= workerUpgrade.cost;
    beeCount += workerUpgrade.gainPerBuy;
  }
});

officeButton.addEventListener("click", () => {
  if (honey >= officeUpgrade.cost) {
    honey -= officeUpgrade.cost;
    beeCount += officeUpgrade.gainPerBuy;
  }
});

function update() {
  honeyDisplay.textContent = `${Math.floor(honey)} ${honeySymbol}`;
  workerButton.disabled = honey < workerUpgrade.cost;
  officeButton.disabled = honey < officeUpgrade.cost;

  if (honey >= officeUpgrade.cost) {
    officeCard.style.display = "";
  }
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
