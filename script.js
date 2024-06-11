const counters = Array.from(document.querySelectorAll(".counter"));

window.addEventListener("load", () => {
  let i = 0;
  const interv = setInterval(() => {
    counters[0].textContent = 120 * i;
    counters[1].textContent = 50 * i;
    counters[2].textContent = 75 * i;
    i++;
    if (i > 100) {
      clearInterval(interv);
    }
  }, 20);
});
