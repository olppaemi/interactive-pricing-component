"use strict";var slider=document.getElementById("slider"),pageviews=document.querySelector(".views"),dollars=document.querySelector(".dollars"),interval=document.querySelector(".interval"),selectBilling=document.querySelector(".billing"),price=16,pricingInterval="month",billing=16;function calculatePrice(e,i){billing="month"===i?e:12*e*.75}function handleSlider(e){switch(e){case"2":calculatePrice(price=36,pricingInterval),pageviews.innerHTML="1M",dollars.innerHTML="$".concat(billing.toFixed(2)),interval.innerHTML=pricingInterval;break;case"1":calculatePrice(price=24,pricingInterval),pageviews.innerHTML="500K",dollars.innerHTML="$".concat(billing.toFixed(2)),interval.innerHTML=pricingInterval;break;case"0":calculatePrice(price=16,pricingInterval),pageviews.innerHTML="100K",dollars.innerHTML="$".concat(billing.toFixed(2)),interval.innerHTML=pricingInterval;break;case"-1":calculatePrice(price=12,pricingInterval),pageviews.innerHTML="50K",dollars.innerHTML="$".concat(billing.toFixed(2)),interval.innerHTML=pricingInterval;break;case"-2":calculatePrice(price=8,pricingInterval),pageviews.innerHTML="10K",dollars.innerHTML="$".concat(billing.toFixed(2)),interval.innerHTML=pricingInterval}}selectBilling.addEventListener("change",(function(){this.checked?(pricingInterval="year",interval.innerHTML="year",calculatePrice(price,pricingInterval),dollars.innerHTML="$".concat(billing.toFixed(2))):(pricingInterval="month",interval.innerHTML="month",calculatePrice(price,pricingInterval),dollars.innerHTML="$".concat(billing.toFixed(2)))})),slider.addEventListener("input",(function(){handleSlider(this.value);var e=(this.value-this.min)/(this.max-this.min)*100;this.style.background="linear-gradient(\n    to right,\n    var(--soft-cyan) 0%,\n    var(--soft-cyan) ".concat(e,"%,\n    var(--light-grayish-blue) ").concat(e,"%,\n    var(--light-grayish-blue) 100%\n  )")}));