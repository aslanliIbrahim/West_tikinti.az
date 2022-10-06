const Button = document.getElementById("plan_list");
const tabButtons = document.querySelectorAll(".tab_btn");
const contents = document.querySelectorAll(".content");
if (Button) {
  Button.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

const mob_nav = document.getElementById("mobile_btn");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    mob_nav.classList.add("mobile_sticky");
  } else {
    mob_nav.classList.remove("mobile_sticky");
  }
});

window.addEventListener("click", (e) => {

  e.stopImmediatePropagation();
  const navtransform = document.getElementById("mobile_nav_items");
  if (navtransform.style.transform === "translateX(0px)") {
    navtransform.style.transform = "translateX(-400px)";
  }
});
mob_nav.addEventListener("click", (e) => {
  
  e.stopImmediatePropagation()
  document.getElementById("mobile_nav_items").style.transform =
    "translateX(0px)";
});

document.getElementById("close_btn").addEventListener("click", (e) => {
  
  e.stopImmediatePropagation()

  document.getElementById("mobile_nav_items").style.transform =
    "translateX(-400px)";
});

var swiper = new Swiper(".Banner_slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
