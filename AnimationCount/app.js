const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = Number(counter.getAttribute("data-target"));
    const c = +counter.innerText;
    const increment = target / 700;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setInterval(updateCounter, 1);
    } else {
      counter.innerHTML = target;
    }
  };
  updateCounter();
});
