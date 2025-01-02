document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("changeColor");
  const panel = document.querySelector(".interactive");

  // Array of bright modern colors
  const colors = ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1", "#955251"];

  button.addEventListener("click", () => {
    // Select a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    panel.style.background = randomColor;
  });
});
