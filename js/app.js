// VARIABLES
const navList = document.querySelector('.nav-list');
const date = document.getElementById("date");
const toggle = document.getElementById("toggle");
const navItem = document.querySelectorAll(".nav-list .nav-item a");
const infoBtn = document.querySelectorAll(".info-btn");
const infoSection = document.querySelector('.info-section');

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

// info btn 
infoBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        infoSection.classList.toggle("active");
    })
})