// Select terminal text element
const textElement = document.getElementById('terminal-text');

// Define text to type
const text = "VERMILLION Protocol Initiated.";
const finalText = "ACCESS DENIED";

// Typing speed
const normalSpeed = 100;

// Typing effect
let index = 0;
function typeEffect() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, normalSpeed);
    } else {
        textElement.innerHTML += `<br><span class="final-text">${finalText}</span>`;
    }
}

// Start typing on DOM load
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
});

// Cursor trail effect
const cursorTrail = document.createElement('div');
cursorTrail.classList.add('cursor-trail');
document.body.appendChild(cursorTrail);

document.addEventListener('mousemove', (e) => {
    cursorTrail.style.left = `${e.pageX}px`;
    cursorTrail.style.top = `${e.pageY}px`;
    cursorTrail.style.opacity = '1';

    setTimeout(() => {
        cursorTrail.style.opacity = '0';
    }, 500);
});

// Random glitch effect
function glitchEffect() {
    const glitchOverlay = document.querySelector('.glitch-overlay');
    setInterval(() => {
        glitchOverlay.style.opacity = Math.random() > 0.5 ? '0.2' : '0';
    }, Math.random() * 500 + 200);
}

glitchEffect();
