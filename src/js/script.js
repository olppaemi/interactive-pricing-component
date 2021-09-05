const slider = document.getElementById("slider");
const views = document.querySelector(".views");
const dollars = document.querySelector(".dollars");

slider.addEventListener("input", (e) => {
  dollars.innerHTML = `$${Number(e.target.value).toFixed(2)}`;
});
