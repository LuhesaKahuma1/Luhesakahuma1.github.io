(() => {
  const savedTheme = localStorage.getItem("luhesa-theme");
  document.documentElement.dataset.theme = savedTheme || "light";

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("[data-theme-toggle]");
    if (!button) return;

    const icon = button.querySelector("[data-theme-icon]");
    const label = button.querySelector("[data-theme-label]");

    function updateButton(theme) {
      const isDark = theme === "dark";
      icon.textContent = isDark ? "☀" : "☾";
      label.textContent = isDark ? "Light mode" : "Dark mode";
      button.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
    }

    updateButton(document.documentElement.dataset.theme);

    button.addEventListener("click", () => {
      const nextTheme =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("luhesa-theme", nextTheme);
      updateButton(nextTheme);
    });
  });
})();
