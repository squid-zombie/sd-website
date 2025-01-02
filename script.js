document.addEventListener("DOMContentLoaded", () => {
  const headline = document.querySelector(".headline");
  const storyText = document.querySelector(".story p");

  // Add a flicker effect to the headline
  setInterval(() => {
    if (Math.random() > 0.8) {
      headline.style.opacity = Math.random() > 0.5 ? "0.7" : "1";
    }
  }, 200);

  // Add hover interaction to story
  storyText.addEventListener("mouseover", () => {
    storyText.style.boxShadow = "0 0 15px rgba(255, 0, 0, 0.8)";
  });

  storyText.addEventListener("mouseout", () => {
    storyText.style.boxShadow = "0 0 5px rgba(255, 0, 0, 0.3)";
  });
});
