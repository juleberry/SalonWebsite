function getContent(fragmentId, callback) {
  let pages = {
    home: "home.html",
    about: "about.html",
    services: "services.html",
    gallery: "gallery.html",
    hours: "hours.html",
    contact: "contact.html"
  };

  fetch(pages[fragmentId])
    .then(response => response.text())
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.log(error);
    });
}

function loadContent() {
  let contentDiv = document.getElementById("app");
  let fragmentId = location.hash.substr(1);

  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });
}

if (!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent);
