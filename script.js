const toggleBtn = document.getElementById("mode-toggle");
let isDarkMode = true;

toggleBtn.addEventListener("click", () => {
  const root = document.documentElement;

  if (isDarkMode) {
    // Switch to Light Mode
    root.style.setProperty("--bg-color", "#ffffff");
    root.style.setProperty("--text-color", "#000000");
    root.style.setProperty("--card-bg", "#eeeeee");
    toggleBtn.textContent = "🌙";
  } else {
    // Switch back to Dark Mode
    root.style.setProperty("--bg-color", "#0d0d0d");
    root.style.setProperty("--text-color", "#ffffff");
    root.style.setProperty("--card-bg", "#1a1a1a");
    toggleBtn.textContent = "☀️";
  }

  isDarkMode = !isDarkMode;
});
