
export function cleanHTML() {
  document.querySelector("main").querySelectorAll("section").forEach((element) => {
    element.remove();
  });
}