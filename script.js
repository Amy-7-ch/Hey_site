function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    currentTheme === "light" ? "dark" : "light"
  );
}