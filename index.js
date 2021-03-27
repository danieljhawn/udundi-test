const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);


function showHide() {
  console.log("event triggered");

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