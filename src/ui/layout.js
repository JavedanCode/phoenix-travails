import logo from "../assets/logo.png";
import github_logo from "../assets/github-mark.svg";
export default function renderLayout() {
  const content = document.createElement("div");
  content.id = "content";
  const header = document.createElement("div");
  header.id = "header";
  const phoenixLogo = document.createElement("img");
  phoenixLogo.src = logo;
  phoenixLogo.alt = "Phoenix Logo";
  phoenixLogo.id = "logo";
  const heading = document.createElement("h1");
  heading.textContent = "Phoenix Travails";
  heading.id = "title";
  header.appendChild(phoenixLogo);
  header.appendChild(heading);
  const main = document.createElement("div");
  main.id = "main";
  const btnContainer = document.createElement("div");
  btnContainer.id = "btn-container";
  main.appendChild(btnContainer);
  const footer = document.createElement("div");
  footer.id = "footer";
  const footer_p = document.createElement("p");
  const text = document.createTextNode("Copyright © 2026 ");
  const link = document.createElement("a");
  link.href = "https://github.com/JavedanCode";
  link.textContent = "JavedanCode";
  const img = document.createElement("img");
  img.classList.add("github-logo");
  img.src = github_logo;
  link.appendChild(img);
  footer_p.appendChild(text);
  footer_p.appendChild(link);
  footer.appendChild(footer_p);

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);

  document.body.appendChild(content);

  return main;
}
