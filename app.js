// Filtrage des stands selon le bouton sélectionné
const filterButtons = document.querySelectorAll(".stand-filter");
const standGrid = document.querySelector(".stand-grid");
const standCard = document.querySelector(".stand-card");
const emptyMsg = document.querySelector(".stand-empty-message");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterButtons.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    const filter = this.getAttribute("data-filter");
    if (filter === "all" || filter === "exterieur") {
      standCard.style.display = "";
      emptyMsg.style.display = "none";
    } else if (filter === "interieur") {
      standCard.style.display = "none";
      emptyMsg.style.display = "block";
    }
  });
});
