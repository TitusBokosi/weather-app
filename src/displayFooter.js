export function displayFooter(app) {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  app.appendChild(footer);

  const footerText = document.createElement("p");
  footerText.textContent = "© 2021 The Odin Project";
  footer.appendChild(footerText);
}
