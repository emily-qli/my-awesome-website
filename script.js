const modeSelectButton = document.getElementById("mode-select");
modeSelectButton.addEventListener("click", () => {
  const currentViewMode = localStorage.getItem("currentViewMode");
  if (currentViewMode === "light" || !currentViewMode) {
    // set to dark
    modeSelectButton.innerText = "Switch to light mode";
    localStorage.setItem("currentViewMode", "dark");
    document.body.classList.add("dark");
  } else {
    // reset to light
    modeSelectButton.innerText = "Switch to dark mode";
    localStorage.setItem("currentViewMode", "light");
    document.body.classList.remove("dark");
  }
});
