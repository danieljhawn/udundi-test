function showHide() {
  details = document.getElementById("details");
  hero = document.getElementById("explore-hero");

  if (details.classList.contains("content")) {
    details.classList.remove("content");
    details.classList.add("show-menu");
    hero.classList.remove("explore");
    hero.classList.add("hide-explore");
  } else {
    details.classList.add("content");
    details.classList.remove("show-menu");
    hero.classList.remove("hide-explore");
    hero.classList.add("explore");
  }
}