import "./style.css";

let leftGoSlider = document.getElementById("leftGoSlider") as HTMLElement;
let rightGoSlider = document.getElementById("rightGoSlider") as HTMLElement;
let slides = document.querySelectorAll(".slids") as NodeList;
let sortSlider = document.querySelectorAll(".sortSlider") as NodeList;
let header = document.getElementById("header") as HTMLElement;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 600) {
    header.classList.add("headerColor");
  } else {
    header.classList.remove("headerColor");
  }
});

leftGoSlider.addEventListener("click", function () {
  const current = document.querySelector(".current");
  current?.classList.remove("current");
  if (current?.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  let changeColor = document.querySelector(".changeColor");
  changeColor?.classList.remove("changeColor");
  if (changeColor?.nextElementSibling) {
    changeColor.nextElementSibling.classList.add("changeColor");
  } else {
    sortSlider[0].classList.add("changeColor");
  }
});

rightGoSlider.addEventListener("click", function () {
  const current = document.querySelector(".current");
  current?.classList.remove("current");
  if (current?.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  let changeColor = document.querySelector(".changeColor");
  changeColor?.classList.remove("changeColor");
  if (changeColor?.nextElementSibling) {
    changeColor.nextElementSibling.classList.add("changeColor");
  } else {
    sortSlider[sortSlider.length - 1].classList.add("changeColor");
  }
});

let NavarPersent = document.getElementById("NavarPersent") as HTMLDivElement;

NavarPersent.addEventListener("mouseenter", function () {
  let HTMLText = document.getElementById("HTMLText") as HTMLDivElement;
  let CssText = document.getElementById("CssText") as HTMLDivElement;
  let JqueryText = document.getElementById("JqueryText") as HTMLDivElement;
  let PhpText = document.getElementById("PhpText") as HTMLDivElement;

  setTimeout(() => {
    console.log("من فقط یه بار اجرا شدم 😎");

    HTMLText.classList.add("HtmlText");
    CssText.classList.add("CssText");
    JqueryText.classList.add("JqueryText");
    PhpText.classList.add("PhpText");

    console.log(HTMLText);
    console.log(CssText);
    console.log(JqueryText);
    console.log(PhpText);
  }, 100);

  const p1 = document.getElementById("p1") as HTMLParagraphElement;
  const p2 = document.getElementById("p2") as HTMLParagraphElement;
  const p3 = document.getElementById("p3") as HTMLParagraphElement;
  const p4 = document.getElementById("p4") as HTMLParagraphElement;

  const duration = 2000;
  const stepTime = 20;

  function startCounter(element: HTMLElement, target: number) {
    let current = 0;
    const increment = target / (duration / stepTime);

    function update() {
      current += increment;
      if (current >= target) {
        current = target;
      }

      element.textContent = Math.floor(current).toString();

      if (current < target) {
        setTimeout(update, stepTime);
      }
    }

    update();
  }

  startCounter(p1, 100);
  startCounter(p2, 200);
  startCounter(p3, 300);
  startCounter(p4, 400);
});
