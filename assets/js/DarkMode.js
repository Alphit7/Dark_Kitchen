const bouton = document.body.querySelector("#darkmode");
export function darkMode() {
    bouton.addEventListener("click", (e) => {
      document.querySelector("main").classList.toggle("dark-mode");
    });
  };