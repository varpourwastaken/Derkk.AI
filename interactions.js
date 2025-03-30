const accountBtn = document.getElementById('account-btn');
const accountMenu = document.getElementById('account-menu');
const form = document.getElementById("ascii-form");
const input = document.getElementById("ascii-input");
const promptWrapper = document.querySelector(".prompt-wrapper");
const generatedBox = document.getElementById("generated-box");
const generatedText = document.getElementById("generated-text");
const title = document.getElementById("main-title");
const quickActions = document.getElementById("quick-actions");
const grid = document.getElementById("grid");
const outputContainer = document.getElementById("output-container");
const logo = document.getElementById("logo");


const settingsToggle = document.getElementById("settingsToggle");
const settingsPanel = document.getElementById("settingsPanel");
if (settingsToggle) {
  settingsToggle.addEventListener("click", () => {
    settingsPanel.classList.toggle("show");
  });
}


accountBtn.addEventListener('click', () => {
  accountMenu.classList.toggle('hidden');
});

window.addEventListener('click', (e) => {
  if (!accountBtn.contains(e.target) && !accountMenu.contains(e.target)) {
    accountMenu.classList.add('hidden');
  }
});


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const prompt = input.value.trim();
  if (prompt) {
    title.style.display = "none";
    quickActions.style.display = "none";
    grid.style.display = "none";
    outputContainer.style.display = "none";

    promptWrapper.style.position = "fixed";
    promptWrapper.style.bottom = "40px";
    promptWrapper.style.left = "50%";
    promptWrapper.style.transform = "translateX(-50%)";

    generatedText.textContent = prompt;
    generatedBox.classList.remove("hidden");
    generatedBox.classList.add("show");

    input.value = "";
  }
});


logo.addEventListener("click", () => {
  location.reload(); 
});


const styleSettingsBtn = document.querySelector("li:nth-child(2)");
const styleModal = document.getElementById("styleModal");
const closeStyleModal = document.getElementById("closeStyleModal");

styleSettingsBtn.addEventListener("click", () => {
  styleModal.classList.add("show");
  accountMenu.classList.add("hidden");
});

closeStyleModal.addEventListener("click", () => {
  styleModal.classList.remove("show");
});


const upgradeBtn = document.querySelector('li:nth-child(5)');
const upgradeModal = document.getElementById('upgradeModal');
const closeUpgradeModal = document.getElementById('closeUpgradeModal');

upgradeBtn.addEventListener('click', () => {
  upgradeModal.classList.add('show');
  accountMenu.classList.add('hidden');
});

closeUpgradeModal.addEventListener('click', () => {
  upgradeModal.classList.remove('show');
});


const openSettingsModal = document.getElementById("openSettingsModal");
const closeSettingsModal = document.getElementById("closeSettingsModal");
const settingsModal = document.getElementById("settingsModal");

openSettingsModal?.addEventListener("click", () => {
  settingsModal.classList.add("show");
});

closeSettingsModal?.addEventListener("click", () => {
  settingsModal.classList.remove("show");
});


const fontSlider = document.getElementById("ascii-size");
const fontDisplay = document.getElementById("fontSizeDisplay");

fontSlider?.addEventListener("input", () => {
  fontDisplay.textContent = `${fontSlider.value}px`;
});



window.addEventListener("click", (e) => {
  if (!accountBtn.contains(e.target) && !accountMenu.contains(e.target)) {
    accountMenu.classList.add('hidden');
  }

  if (e.target === styleModal) {
    styleModal.classList.remove("show");
  }

  if (e.target === upgradeModal) {
    upgradeModal.classList.remove("show");
  }

  if (e.target === settingsModal) {
    settingsModal.classList.remove("show");
  }
});


document.getElementById("generate-candle").addEventListener("click", () => {
  document.getElementById("ascii-input").value = "A Derkk-themed candle with glowing light";
});


document.getElementById("quick-prompt").addEventListener("click", () => {
  const randomPrompts = [
    "A space cat with a helmet",
    "Retro robot with big eyes",
    "ASCII mountain landscape",
    "An old-school game controller",
    "ASCII logo for Derkk",
    "A magical ASCII tree with runes",
    "ASCII haunted house at night",
    "A cute ASCII penguin sliding on ice",
    "ASCII steampunk goggles",
    "Glowing portal in ASCII",
    "Nigga kys"

    
  ];
  const random = randomPrompts[Math.floor(Math.random() * randomPrompts.length)];
  document.getElementById("ascii-input").value = random;
});

// 💾 Export to text
document.getElementById("export-btn").addEventListener("click", () => {
  const ascii = document.getElementById("generated-text").textContent;
  const blob = new Blob([ascii], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "ascii_art.txt";
  link.click();
});

// 🎨 Cycle ASCII styles
const styleButton = document.getElementById("style-block");
const styleOptions = [
  { label: "🖋️ Style: Block", value: "block" },
  { label: "🖋️ Style: Dot Matrix", value: "dot" },
  { label: "🖋️ Style: Line Art", value: "line" },
  { label: "🖋️ Style: Grainy", value: "noise" }
];
let styleIndex = 0;

styleButton.addEventListener("click", () => {
  styleIndex = (styleIndex + 1) % styleOptions.length;
  styleButton.textContent = styleOptions[styleIndex].label;
  document.getElementById("ascii-style").value = styleOptions[styleIndex].value;
});

// 🌀 Detailed mode toggle
const detailButton = document.getElementById("detail-toggle");
let detailed = true;

detailButton.addEventListener("click", () => {
  if (detailed) {
    detailButton.textContent = "🌀 Simple";
    document.getElementById("gen-resolution").value = "low";
  } else {
    detailButton.textContent = "🌀 Detailed";
    document.getElementById("gen-resolution").value = "high";
  }
  detailed = !detailed;
});

// 🔁 Plan switch (personal/business)
const personalBtn = document.querySelector(".plan-switch button:nth-child(1)");
const businessBtn = document.querySelector(".plan-switch button:nth-child(2)");
const personalPlans = document.querySelector(".plan-options");
const businessPlans = document.getElementById("business-plans");

personalBtn.addEventListener("click", () => {
  personalBtn.classList.add("active");
  businessBtn.classList.remove("active");
  personalPlans.classList.remove("hidden");
  businessPlans.classList.add("hidden");
});

businessBtn.addEventListener("click", () => {
  businessBtn.classList.add("active");
  personalBtn.classList.remove("active");
  personalPlans.classList.add("hidden");
  businessPlans.classList.remove("hidden");
});