let leftone = document.querySelector(".left__image-one");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  leftone.style.transform = "translate(-" + x * 15 + "px, -" + y * 10 + "px)";
});

let lefttwo = document.querySelector(".left__image-two");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  lefttwo.style.transform = "translate(-" + x * 20 + "px, -" + y * 25 + "px)";
});

let leftthree = document.querySelector(".left__image-three");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  leftthree.style.transform = "translate(-" + x * 25 + "px, -" + y * 10 + "px)";
});

let rightone = document.querySelector(".right__image-one");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  rightone.style.transform = "translate(-" + x * 15 + "px, -" + y * 10 + "px)";
});

let righttwo = document.querySelector(".right__image-two");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  righttwo.style.transform = "translate(-" + x * 20 + "px, -" + y * 25 + "px)";
});

let rightthree = document.querySelector(".right__image-three");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  rightthree.style.transform =
    "translate(-" + x * 25 + "px, -" + y * 10 + "px)";
});

let center = document.querySelector(".center__image");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  center.style.transform = "translate(-" + x * 15 + "px, -" + y * 10 + "px)";
});

let title = document.querySelector(".center__title");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  title.style.transform = "translate(-" + x * 25 + "px, -" + y * 10 + "px)";
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(
      ".header__burger, .header__menu, .header__main-mobile, .logo, .main, .footer"
    ).toggleClass("active");
    $("body").toggleClass("lock");
  });
});
$(document).ready(function () {
  $(".menu__item").click(function (event) {
    $(
      ".header__burger, .header__menu, .header__main-mobile, .logo, .main, .footer"
    ).toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(document).ready(function () {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(entry.target).addClass("active");
        } else {
          $(entry.target).removeClass("active");
        }
      });
    },
    { threshold: 0.1 }
  );
  $(".about__work-wrapper").each(function () {
    observer.observe(this);
  });
});

$(document).ready(function () {
  $(".review__column-one").click(function (event) {
    $(".review__column-one").addClass("active");
    $(".review__column-one").removeClass("noactivetwo");
    $(".review__column-one").removeClass("noactivethree");
    $(".review__column-two").addClass("noactiveone");
    $(".review__column-three").addClass("noactiveone");
    $(".review__column-two").removeClass("active");
    $(".review__column-three").removeClass("active");
    $(".review__column-two").removeClass("noactivetwo");
    $(".review__column-three").removeClass("noactivetwo");
    $(".review__column-two").removeClass("noactivethree");
    $(".review__column-three").removeClass("noactivethree");
  });
});

$(document).ready(function () {
  $(".review__column-two").click(function (event) {
    $(".review__column-two").addClass("active");
    $(".review__column-two").removeClass("noactiveone");
    $(".review__column-two").removeClass("noactivethree");
    $(".review__column-one").addClass("noactivetwo");
    $(".review__column-three").addClass("noactivetwo");
    $(".review__column-one").removeClass("active");
    $(".review__column-three").removeClass("active");
    $(".review__column-one").removeClass("noactiveone");
    $(".review__column-three").removeClass("noactiveone");
    $(".review__column-one").removeClass("noactivethree");
    $(".review__column-three").removeClass("noactivethree");
  });
});

$(document).ready(function () {
  $(".review__column-three").click(function (event) {
    $(".review__column-three").addClass("active");
    $(".review__column-three").removeClass("noactiveone");
    $(".review__column-three").removeClass("noactivetwo");
    $(".review__column-one").addClass("noactivethree");
    $(".review__column-two").addClass("noactivethree");
    $(".review__column-one").removeClass("active");
    $(".review__column-two").removeClass("active");
    $(".review__column-two").removeClass("noactiveone");
    $(".review__column-one").removeClass("noactiveone");
    $(".review__column-two").removeClass("noactivetwo");
    $(".review__column-one").removeClass("noactivetwo");
  });
});

$(document).ready(function () {
  $(".work-choice-one").click(function (event) {
    $(".work__image-wrap-one").addClass("visible");
    $(".work__image-wrap-two").removeClass("visible");
  });
});

$(document).ready(function () {
  $(".work-choice-two").click(function (event) {
    $(".work__image-wrap-two").addClass("visible");
    $(".work__image-wrap-one").removeClass("visible");
  });
});

let mask = document.querySelector(".mask");

window.addEventListener("load", () => {
  mask.classList.add("hide");
  setTimeout(() => {
    mask.remove();
  }, 600);
});

let header = document.querySelector(".header");

window.addEventListener("load", () => {
  header.classList.add("anim");
  setTimeout(() => {
    mask.remove();
  }, 600);
});

let body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("scroll");
  setTimeout(() => {
    mask.remove();
  }, 600);
});

window.onload = function () {
  window.scrollTo(0, 0);
};

$(".work__image-one").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $(".prev-one"),
  nextArrow: $(".next-one"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".work__image-two").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $(".prev-two"),
  nextArrow: $(".next-two"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
