function getContent(fragmentId, callback){

  let pages = {
    home: "Home page. Welcome to my site.",
    about: "Describes the site",
    services: "Page of salon services",
    gallery: "Gallery page",
    hours: "Salon Hours page",
    contact: "Contact the salon on this page if you have any questions."
  };

  callback(pages[fragmentId]);
}



function loadContent(){

  let contentDiv = document.getElementById("app"),
      fragmentId = location.hash.substr(1);

  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });

}

if(!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent)
