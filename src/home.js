// Function that renders the home page
import imgSrc from "./assets/showspace.jpg";

export function renderHomePage() {
  const container = document.getElementById("content");
  container.innerHTML = "";

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = "Picture of a nasty looking restaurant";

  container.appendChild(img);
}

//renderHomePage();
