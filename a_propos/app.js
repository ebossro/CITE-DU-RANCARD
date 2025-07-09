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

const langSelector = document.querySelector(".language-selector");
const langBtn = document.querySelector(".lang-btn");
if (langSelector && langBtn) {
  langBtn.addEventListener("click", function () {
    langSelector.classList.toggle("open");
  });
  document.addEventListener("click", function (e) {
    if (!langSelector.contains(e.target)) {
      langSelector.classList.remove("open");
    }
  });
  document.querySelectorAll(".lang-dropdown li").forEach(function (item) {
    item.addEventListener("click", function () {
      langSelector.classList.remove("open");
      langBtn.querySelector(".lang-label").textContent =
        this.getAttribute("data-lang").toUpperCase();
    });
  });
}
