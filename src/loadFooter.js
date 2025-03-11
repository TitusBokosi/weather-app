import emailL from "./images/email-logo.svg";
import gitL from "./images/github.png";
import twitterL from "./images/twitter-logo-2.svg";

export function loadFooter(app) {
  const footer = document.createElement("div");
  app.appendChild(footer);
  footer.classList.add("footer");

  const footerText = document.createElement("p");
  footerText.textContent = "@the odin project";
  footerText.classList.add("footer-text");

  const contacts = document.createElement("div");
  contacts.classList.add("contacts");

  const contactsHeading = document.createElement("h4");
  contactsHeading.textContent = "Contact Us";
  contacts.appendChild(contactsHeading);

  const contactsContainer = document.createElement("div");
  contacts.appendChild(contactsContainer);
  contactsContainer.classList.add("contacts-container");

  const gitHubContainer = document.createElement("a");
  contactsContainer.appendChild(gitHubContainer);

  const gitLogo = document.createElement("img");
  gitLogo.src = gitL;
  gitHubContainer.appendChild(gitLogo);

  const github = document.createElement("p");
  github.textContent = "github.com/TitusBokosi";
  gitHubContainer.appendChild(github);

  const twitterContainer = document.createElement("a");
  contactsContainer.appendChild(twitterContainer);

  const twitterLogo = document.createElement("img");
  twitterLogo.src = twitterL;
  twitterContainer.appendChild(twitterLogo);

  const twitter = document.createElement("p");
  twitter.textContent = "x.com/titus_codes";
  twitterContainer.appendChild(twitter);
  gitHubContainer.setAttribute("href", "https://github.com/TitusBokosi");
  twitterContainer.setAttribute("href", "https://x.com/titus_codes");

  footer.appendChild(contacts);
  footer.appendChild(footerText);
}
