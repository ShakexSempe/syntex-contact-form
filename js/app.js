// date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// hamburger
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
    let navList = document.querySelector('.nav-list');
    navList.classList.toggle("active");
    toggle.classList.toggle("active");
})