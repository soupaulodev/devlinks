const switchButton = document
  .getElementById("switch")
  .addEventListener("click", () => {
    var body = document.getElementById("body");
    body.classList.toggle("light");
  });
