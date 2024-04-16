import './style/main.scss';

import emailjs from '@emailjs/browser';

window.addEventListener("load", function () {
  const burgerMenuBtn = document.getElementById("burger-menu-btn");
  if (burgerMenuBtn) {
    burgerMenuBtn.addEventListener("click", function () {
      toggleMenu();
    });
  }

  const navMenuItems = document.querySelectorAll(".nav__item");
  if (navMenuItems) {
    navMenuItems.forEach((item) => {
      item.addEventListener("click", function () {
        toggleMenu();
      });
    });
  }

  const form = document.getElementById("contact-form");
  if (form && form instanceof HTMLFormElement) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) return;

      const email = form.email.value;
      const message = form.message.value;

      emailjs.init({ publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY });

      emailjs.send("service_0bo1ksr", "template_ldvv38h", {
        email: email,
        message: message,
      });

      const sendBtn = form.querySelector("button[type=submit]");
      if (sendBtn)  {
        sendBtn.classList.add("is-send");

        const sendIcon = sendBtn.querySelector(".form__icon");
        if (!sendIcon) return;
        sendIcon.classList.remove("fa-paper-plane");
        sendIcon.classList.add("fa-check");

        const sendText = sendBtn.querySelector("p");
        if (sendText) {
          sendText.innerHTML = "Message envoyé !";
        }
      }
     
      form.reset();
    });
  }
});

function toggleMenu() {
  const burgerMenuIcon = document.getElementById("burger-menu-icon");
  const menu = document.getElementById("menu");

  if (burgerMenuIcon) {
    burgerMenuIcon.classList.toggle("fa-bars");
    burgerMenuIcon.classList.toggle("fa-xmark");
  }

  if (menu) {
    menu.classList.toggle("nav-is-open");
    menu.classList.toggle("nav-is-closed");
  }
}
