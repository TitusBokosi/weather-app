import { loadHeader } from "./loadHeader.js";
import { loadHero } from "./loadHero.js";
import { loadFooter } from "./loadFooter.js";

export function app(html) {
  const container = document.createElement("div");
  container.classList.add("container");
  html.appendChild(container);

  loadHeader(container);
  loadHero(container);
  loadFooter(container);
}
