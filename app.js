const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const placeholderLinks = document.querySelectorAll("[data-policy-link]");

const policyUrls = {
  privacy: "privacy_policy.html",
  terms: "terms_of_service.html",
};

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeMobileMenu() {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

function setupMobileMenu() {
  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMobileMenu();
    }
  });
}

function setupPolicyLinks() {
  placeholderLinks.forEach((link) => {
    const type = link.dataset.policyLink;
    if (type && policyUrls[type]) {
      link.setAttribute("href", policyUrls[type]);
    }
  });
}

setupMobileMenu();
setupPolicyLinks();
initIcons();
