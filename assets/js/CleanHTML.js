
export function cleanHTML() {
  main.querySelectorAll("section").forEach((element) => {
    element.remove();
  });
}