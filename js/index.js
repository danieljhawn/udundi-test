function showHide() {
  console.log("event triggered");
  details = document.getElementById("details");
  hero = document.getElementById("explore-hero");
  if (details.style.display === "none") {
    details.style.display = "block";
    hero.style.display = "none";
  } else {
    details.style.display = "none";
    hero.style.display = "block";
  }
}