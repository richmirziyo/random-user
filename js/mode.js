const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

const toggleModeBtin = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};

darkBtn.addEventListener("click", () => {
  toggleModeBtin();
  localStorage.setItem("mode", "dark-mode");
});

lightBtn.addEventListener("click", () => {
  toggleModeBtin();
  localStorage.setItem("mode", "");
});
