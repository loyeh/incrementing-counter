let counters = document.querySelectorAll(".counter");
counters = Array.from(counters);

console.log(counters);

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
