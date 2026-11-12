const preview = document.querySelector("#preview");
const percentNode = document.querySelector("#percent");
const progressFill = document.querySelector("#progressFill");
const progressStatus = document.querySelector("#progressStatus");
const replayButton = document.querySelector("#replayButton");
const codeContent = document.querySelector("#codeContent");
const codeTabs = [...document.querySelectorAll(".code-tab")];

const source = {
  html: `<main class="loader">
  <div class="morph-mark">
    <span class="tile"></span>
    <span class="tile accent"></span>
    <span class="tile"></span>
    <span class="tile"></span>
  </div>
  <div class="percent"><strong>0</strong><span>%</span></div>
  <div class="progress"><span></span></div>
</main>
<div class="reveal">Hey</div>`,
  css: `.morph-mark {
  width: 42px;
  height: 42px;
  position: relative;
  animation: orbit 2.8s linear infinite;
}
.tile {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 4px;
  background: #fff;
  animation: morph 1.25s ease-in-out infinite alternate;
}
.tile.accent { background: #f05b2d; }
@keyframes morph {
  50% { border-radius: 50%; transform: scale(1.06) rotate(45deg); }
}
.reveal { background: #fff; color: #09090d; }`,
  js: `const duration = 4.1;
let elapsed = 0;
let animationFrame;

function animate(timestamp) {
  const progress = Math.min(elapsed / duration, 1);
  const value = Math.floor(progress * 100);
  percent.textContent = value;
  progressFill.style.width = value + "%";

  if (progress < 1) {
    animationFrame = requestAnimationFrame(animate);
  } else {
    preview.classList.add("done");
  }
}`
};

let startedAt = 0;
let rafId = 0;
const duration = 4100;

function showFile(file) {
  codeContent.textContent = source[file];
  codeTabs.forEach(tab => {
    const active = tab.dataset.file === file;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
}
codeTabs.forEach(tab => tab.addEventListener("click", () => showFile(tab.dataset.file)));
showFile("js");

function runLoader(now) {
  if (!startedAt) startedAt = now;
  const progress = Math.min((now - startedAt) / duration, 1);
  const value = Math.floor(progress * 100);
  percentNode.textContent = String(value);
  progressFill.style.width = `${value}%`;
  progressStatus.textContent = progress < 1 ? "PLEASE WAIT" : "COMPLETE";

  if (progress < 1) {
    rafId = requestAnimationFrame(runLoader);
  } else {
    preview.classList.add("done");
  }
}

function replay() {
  cancelAnimationFrame(rafId);
  startedAt = 0;
  preview.classList.remove("done");
  percentNode.textContent = "0";
  progressFill.style.width = "0%";
  progressStatus.textContent = "PLEASE WAIT";
  rafId = requestAnimationFrame(runLoader);
}
replayButton.addEventListener("click", replay);
replay();
