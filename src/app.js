import { loadHeader } from "./loadHeader.js";
import { loadHero } from "./loadHero.js";
import { loadFooter } from "./loadFooter.js";
import { loadAbout } from "./loadAbout.js";

export function app(html) {
  const container = document.createElement("div");
  container.classList.add("container");
  html.appendChild(container);

  const hero = document.createElement("div");
  hero.classList.add("home-hero");
  container.appendChild(hero);
  loadHeader(hero);
  loadAbout(hero);
  loadHero(container);
  loadFooter(container);
}
