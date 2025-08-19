const typingText = "Happy Birthday Wynth!! 🎉🎉🎂😎😎😎"
const typingEl = document.getElementById("typing");
let i = 0;

function typeWriter() {
  if (i < typingText.length) {
    typingEl.innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    startConfetti();
  }
}

function startConfetti() {
  for (let j = 0; j < 50; j++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}

function revealMessage() {
  document.getElementById("message").style.display = "block";
}

window.onload = typeWriter;
