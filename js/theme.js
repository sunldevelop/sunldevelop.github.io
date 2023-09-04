var isDark = localStorage.getItem("isDark") === "false" ? false : true;

(function initTheme() {
  if (isDark) {
    document.body.classList.add("dark");
  }
  document.body.classList.remove("invisible");
  document.getElementById("toggle-theme").addEventListener("click", () => {
    isDark = !isDark;
    if (isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("isDark", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("isDark", "false");
    }
  });
})();
