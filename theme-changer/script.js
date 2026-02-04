const themeBtn = document.getElementById("themeBtn");
const body = document.body;

// Start with light theme
body.classList.add("light");

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
});
