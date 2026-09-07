const words = [
  "AI Websites",
  "Portfolio Design",
  "Business Solutions",
  "Digital Creator"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const text = document.getElementById("typing-text");
  if (!text) return;

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    text.innerHTML = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    text.innerHTML = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();