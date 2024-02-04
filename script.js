const switchButton = document
  .getElementById("switch")
  .addEventListener("click", () => {
    var element = document.getElementById("body");
    element.classList.toggle("light");
  });
