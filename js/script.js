window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,.65)";
        nav.style.backdropFilter = "blur(25px)";
    } else {
        nav.style.background = "rgba(255,255,255,.08)";
    }
});

// Typewriter Effect
const words = [
    "Java Developer",
    "PHP Full Stack Developer",
    "BCA Student",
    "Cyber Security Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1800; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400; // Pause before typing next word
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

