"use strict";

const spendingsData = new Request("data.json");
const chart = document.querySelector(".charts");

fetch(spendingsData)
  .then((response) => response.json())
  .then((data) => {
    for (const spending of data.spendings) {
      // new elements (bars, label, day name)
      const chartBar = document.createElement("div");
      const label = document.createElement("div");
      const day = document.createElement("div");

      // add classes to elements
      chartBar.classList.add("chart-bar");
      chartBar.setAttribute("style", `height: ${spending.amount * 2.86}px`);
      label.classList.add("chart-label", "text-s", "text-bold");
      day.classList.add("label", "text-xs");

      // create charts
      chartBar.appendChild(day).textContent = spending.day;
      chartBar.appendChild(label).textContent = spending.amount;
      chart.appendChild(chartBar);

      // click event
      chartBar.addEventListener("click", function () {
        this.classList.toggle("active");

        if (chartBar.classList.contains("active")) {
          label.setAttribute("style", "display: inline-block");
        } else {
          label.setAttribute("style", "display: none");
        }
      });
    }
  })
  .catch(console.error);
