// VARIABLES
const navList = document.querySelector('.nav-list');
const date = document.getElementById("date");
const toggle = document.getElementById("toggle");
const navItem = document.querySelectorAll(".nav-list .nav-item a");
// date
date.innerHTML = new Date().getFullYear();

// hamburger
toggle.addEventListener("click", () => {
    navList.classList.toggle("active");
    toggle.classList.toggle("active");
});

// nav items 
navItem.forEach(item => {
    item.addEventListener("click", () => {
        navList.classList.toggle("active");
        toggle.classList.toggle("active");
    })
});