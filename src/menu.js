export function renderMenu() {
  const container = document.getElementById("content");

  const menuWrap = document.createElement("div");
  menuWrap.classList.add("menu-wrap");
  container.append(menuWrap);

  const menu = document.createElement("h1");
  menu.textContent = "Menu";
  menu.classList.add("menu-item");
  menuWrap.append(menu);

  const description = document.createElement("div");
  description.classList.add("food");
  menu.append(description);
  description.textContent =
    "My food description be here it tastes so good...im sure";
}

//renderMenu();
