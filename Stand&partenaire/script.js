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

const mainButton1 = document.getElementsById("btn-main1");
document.addEventListener("click", function (event) {
  event.preventDefault();
  mainButton1.style.backgroundColor = "blue";
});
