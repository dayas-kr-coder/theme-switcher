// Set the initial theme based on the user's system preference
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.add("light-mode");
}

// Toggle between dark mode and light mode on click
document.getElementById("themes").addEventListener("click", (e) => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.replace("light-mode", "dark-mode");
  } else {
    document.body.classList.replace("dark-mode", "light-mode");
  }
});
