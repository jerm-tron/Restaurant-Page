export function aboutPage() {
  const container = document.getElementById("content");
  container.innerHTML = "";

  const menuWrap = document.createElement("div");
  menuWrap.classList.add("menu-wrap");
  container.append(menuWrap);

  const menu = document.createElement("h1");
  menu.textContent = "About us";
  menu.classList.add("menu-item");
  menuWrap.append(menu);

  const description = document.createElement("div");
  description.classList.add("food");
  menu.append(description);
  description.textContent =
    "We are the most amazing restaurant ever...believe it!";
}

aboutPage();
