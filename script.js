"use strict";

// Select from DOM
const accordionContent = document.querySelectorAll(".accordion-content");
const accordionTitle = document.querySelectorAll(".accordion-title");


// Executions
accordionTitle.forEach((item, i) => {
    item.addEventListener("click", function () {
        if (item.classList.contains("active")) {
            accordionContent[i].style.height = `0`
        } else {
            accordionTitle.forEach(item => {
                item.classList.remove("active");
            });
            accordionContent.forEach(item => {
                item.style.height = "0";
            });
            accordionContent[i].style.height = `${accordionContent[i].scrollHeight + 18}px`;
        }
        item.classList.toggle("active");
    });
});