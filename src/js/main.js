const slider = document.getElementById("slider");
const pageviews = document.querySelector(".views");
const dollars = document.querySelector(".dollars");
const interval = document.querySelector(".interval");
const selectBilling = document.querySelector(".billing");

let price = 16.0;
let pricingInterval = "month";
let billing = 16.0;

function calculatePrice(price, interval) {
  billing = interval === "month" ? price : price * 12 * 0.75;
}

function handleSlider(value) {
  switch (value) {
    case "2":
      price = 36;
      calculatePrice(price, pricingInterval);
      pageviews.innerHTML = "1M";
      dollars.innerHTML = `$${billing.toFixed(2)}`;
      interval.innerHTML = pricingInterval;
      break;
    case "1":
      price = 24;
      calculatePrice(price, pricingInterval);
      pageviews.innerHTML = "500K";
      dollars.innerHTML = `$${billing.toFixed(2)}`;
      interval.innerHTML = pricingInterval;
      break;
    case "0":
      price = 16;
      calculatePrice(price, pricingInterval);
      pageviews.innerHTML = "100K";
      dollars.innerHTML = `$${billing.toFixed(2)}`;
      interval.innerHTML = pricingInterval;
      break;
    case "-1":
      price = 12;
      calculatePrice(price, pricingInterval);
      pageviews.innerHTML = "50K";
      dollars.innerHTML = `$${billing.toFixed(2)}`;
      interval.innerHTML = pricingInterval;
      break;
    case "-2":
      price = 8;
      calculatePrice(price, pricingInterval);
      pageviews.innerHTML = "10K";
      dollars.innerHTML = `$${billing.toFixed(2)}`;
      interval.innerHTML = pricingInterval;
      break;
  }
}

selectBilling.addEventListener("change", function () {
  if (this.checked) {
    pricingInterval = "year";
    interval.innerHTML = "year";
    calculatePrice(price, pricingInterval);
    dollars.innerHTML = `$${billing.toFixed(2)}`;
  } else {
    pricingInterval = "month";
    interval.innerHTML = "month";
    calculatePrice(price, pricingInterval);
    dollars.innerHTML = `$${billing.toFixed(2)}`;
  }
});

slider.addEventListener("input", function () {
  handleSlider(this.value);
  const fillPercent = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(
    to right,
    var(--soft-cyan) 0%,
    var(--soft-cyan) ${fillPercent}%,
    var(--light-grayish-blue) ${fillPercent}%,
    var(--light-grayish-blue) 100%
  )`;
});
