const boxs = document.querySelectorAll(".box");

window.addEventListener("scroll", checkbox);

checkbox();

function checkbox() {
  const traggerBottom = (window.innerHeight / 6) * 4;
  boxs.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < traggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
