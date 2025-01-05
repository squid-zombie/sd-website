// Select the HTML element with the class 'glow-text'
const textElement = document.querySelector('.glow-text');

// Define the text to animate
const text = "Welcome to the Retro Terminal. Access Granted";

// Typing speeds
const normalSpeed = 100;   // Speed for most of the text
const slowSpeed = 300;     // Speed for the last word
const pauseBeforeLastWord = 1000; // Pause before typing the last word (in milliseconds)

// Counter to track which character we're currently typing
let index = 0;

// Split the text into words to identify the last word
const words = text.split(" ");
const lastWord = words[words.length - 1];
const textWithoutLastWord = text.slice(0, text.lastIndexOf(lastWord));

// Function to perform the typing effect
function typeEffect() {
    // Type the text up to the last word at normal speed
    if (index < textWithoutLastWord.length) {
        textElement.innerHTML += textWithoutLastWord.charAt(index);
        index++;
        setTimeout(typeEffect, normalSpeed);
    } 
    // Pause before typing the last word
    else if (index === textWithoutLastWord.length) {
        setTimeout(() => {
            index++;
            typeEffect();
        }, pauseBeforeLastWord); // Pause before starting the last word
    } 
    // Type the last word slower
    else if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, slowSpeed);
    }
}

// Start the typing effect once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
});
