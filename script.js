\// JavaScript file for enhanced interactions
document.addEventListener("DOMContentLoaded", () => {
  const headline = document.querySelector(".headline");
  const storyText = document.querySelector(".story p");

  // Add a realistic flicker effect to the headline
  const flickerEffect = () => {
    setInterval(() => {
      // Randomly decide whether the flicker happens this time
      if (Math.random() > 0.6) { // Adjust probability for flicker occurrence
        // Randomly set opacity to give it a flickering effect
        headline.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2); // Opacity between 0.5 and 1

        // Randomize the timing of returning to full opacity for a less mechanical feel
        setTimeout(() => {
          headline.style.opacity = "1";
        }, Math.random() * 300 + 100); // Delay between 100ms and 400ms
      }
    }, Math.random() * 300 + 100); // Interval between flickers: 100ms to 400ms
  };

  // Call the flicker effect
  flickerEffect();

  // Add hover interaction to the story text
  storyText.addEventListener("mouseover", () => {
    storyText.style.boxShadow = "0 0 15px rgba(255, 0, 0, 0.8)";
  });

  storyText.addEventListener("mouseout", () => {
    storyText.style.boxShadow = "0 0 5px rgba(255, 0, 0, 0.3)";
  });
});
