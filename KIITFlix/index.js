import { allMovies } from "./db.js";

const show = document.getElementById("show");
const slider = document.getElementById("slider");
const viewer = Array.from(document.querySelectorAll(".viewerImg"));
const logo = document.getElementById("logo");
const music = document.getElementById("music");
const movies = Array.from(document.querySelectorAll("#movies"));
const special = document.getElementById("special");
const specialPage = document.getElementById("specialPage");
const showsPage = document.getElementById("showsPage");
const musicPage = document.getElementById("musicPage");

function pageSwitch() {
  slider.classList.add("hidden");
  viewer.forEach((n) => n.classList.add("hidden"));
  movies.forEach((n) => n.classList.add("hidden"));
}
show.addEventListener("click", () => {
  pageSwitch();
  showsPage.classList.remove("hidden");
  musicPage.classList.add("hidden");
  specialPage.classList.add("hidden");
});
music.addEventListener("click", () => {
  pageSwitch();
  musicPage.classList.remove("hidden");
  showsPage.classList.add("hidden");
  specialPage.classList.add("hidden");
});
special.addEventListener("click", () => {
  pageSwitch();
  specialPage.classList.remove("hidden");
  showsPage.classList.add("hidden");
  musicPage.classList.add("hidden");
});

logo.addEventListener("click", () => {
  slider.classList.remove("hidden");
  movies.forEach((n) => n.classList.remove("hidden"));
  viewer.forEach((n) => n.classList.remove("hidden"));
  showsPage.classList.add("hidden");
  musicPage.classList.add("hidden");
  specialPage.classList.add("hidden");
});

function addElementHome(allMovies) {
  allMovies.forEach((n) => {
    if (n.contentHeading === "recommended") {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "movie");
      anchor.setAttribute("href", n.playLink);
      const image = document.createElement("img");
      image.setAttribute("src", n.imageLink);
      anchor.appendChild(image);
      const container = document.querySelector("#moviesContent-recommended");
      container.appendChild(anchor);
    }
    if (n.contentHeading === "trending") {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "movie");
      anchor.setAttribute("href", n.playLink);
      const image = document.createElement("img");
      image.setAttribute("src", n.imageLink);
      anchor.appendChild(image);
      const container = document.querySelector("#moviesContent-trending");
      container.appendChild(anchor);
    }
    if (n.contentHeading === "shows") {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "movie");
      anchor.setAttribute("href", n.playLink);
      const image = document.createElement("img");
      image.setAttribute("src", n.imageLink);
      anchor.appendChild(image);
      const container = document.querySelector("#moviesContent-shows");
      container.appendChild(anchor);
    }
    if (n.contentHeading === "music") {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "movie");
      anchor.setAttribute("href", n.playLink);
      const image = document.createElement("img");
      image.setAttribute("src", n.imageLink);
      anchor.appendChild(image);
      const container = document.querySelector("#moviesContent-music");
      container.appendChild(anchor);
    }
    if (n.contentHeading === "special") {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "movie");
      anchor.setAttribute("href", n.playLink);
      const image = document.createElement("img");
      image.setAttribute("src", n.imageLink);
      anchor.appendChild(image);
      const container = document.querySelector("#moviesContent-special");
      container.appendChild(anchor);
    }
  });
}

addElementHome(allMovies);
