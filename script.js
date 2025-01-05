// Typing effect
const textElement = document.querySelector('.glow-text');
const text = "Welcome to the Retro Terminal...";

let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
});
