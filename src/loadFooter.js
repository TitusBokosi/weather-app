export function loadFooter(app) {
  const footer = document.createElement("div");
  app.appendChild(footer);
  footer.classList.add("footer");

  const footerText = document.createElement("p");
  footerText.textContent = "@the odin project";
  footer.appendChild(footerText);
}
