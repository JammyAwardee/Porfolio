(function () {
  "use strict";

  function select(el, all = false) {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  function onscroll(el, listener) {
    el.addEventListener("scroll", listener);
  }

  //CHANGE NAVBAR STATE TO ACTIVE ON SCROLL
  let navbarlinks = select("#navbarNavDropdown .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  //PRELOADER
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  //Initialize AOS
  AOS.init();

  //Setting skills animation delay,

  window.addEventListener("resize", function () {
    const mqList = window.matchMedia("(max-width: 575px)");
    const skilldelay = document.querySelectorAll(".skilldelay");
    const portdelay = document.querySelectorAll(".portdelay");

    for (let i = 0; i < skilldelay.length; i++) {
      if (mqList.matches) {
        document
          .querySelector(`.skilldelay${i}`)
          .setAttribute("data-aos-delay", "0");
      } else if (i == 1) {
        document
          .querySelector(`.skilldelay${i}`)
          .setAttribute("data-aos-delay", "0");
      } else {
        document
          .querySelector(`.skilldelay${i}`)
          .setAttribute("data-aos-delay", "200");
      }
    }

    for (let i = 0; i < portdelay; i++) {
      let d = 0;
      if (mqList.matches) {
        document.querySelector(`.port${i}`).setAttribute("data-aos-delay", "0");
      } else {
        document
          .querySelector(`.port${1}`)
          .setAttribute("data-aos-delay", `${i}`);
        d += 100;
      }
    }
  });
})();
