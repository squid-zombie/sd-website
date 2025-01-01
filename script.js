// Add interactivity to the button
document.getElementById("magicButton").addEventListener("click", () => {
  const body = document.body;

  // Generate random colors
  const randomColor1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const randomColor2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  // Apply gradient background
  body.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;

  // Add a playful alert
  alert("Ta-da! The colors have changed!");
});
