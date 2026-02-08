const clickMsg = document.querySelector("#click-msg");
const bgMusic = document.getElementById("bg-music");
let musicStarted = false;
document.addEventListener("click", () => {
  if (!musicStarted) {
    bgMusic.currentTime = 120; // start 160 seconds in
    bgMusic.volume = 0.4;
    bgMusic.play().catch(() => {
      console.log("Autoplay blocked; requires user interaction");
    });
    musicStarted = true; // prevent it from restarting
  }
});

const img = document.querySelector("img");
const yesBtn = document.querySelector("#yes-btn");
const noBtn = document.querySelector("#no-btn");
const yesResult = document.querySelector("#after-yes");
const neutralDiv = document.querySelector("#before-yes");
const yesDiv = document.querySelector("#after-yes");
const warningMsg = document.querySelector("#warning-msg");
const container = document.getElementById("btn-container");

yesBtn.addEventListener("click", handleYesBtn);
noBtn.addEventListener("mousemove", handleNoButtonHover);

function handleNoButtonHover() {
  warningMsg.classList.remove("hidden");
  clickMsg.classList.add("hidden");
  img.src = "src/bubu-chasing-dudu.gif";
  img.style.width = "300px";

  const btnRect = noBtn.getBoundingClientRect();

  // calculate max x and y inside the viewport
  const maxX = window.innerWidth - btnRect.width;
  const maxY = window.innerHeight - btnRect.height;

  // pick a random position anywhere visible
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.transform = `translate(${x - btnRect.left}px, ${
    y - btnRect.top
  }px)`;
}

function handleYesBtn() {
  img.src = "src/bubu-kiss-dudu-kiss-kiss.gif";
  img.style.width = "350px";
  yesDiv.classList.remove("hidden");
  neutralDiv.classList.add("hidden");
  warningMsg.classList.add("hidden");
}
