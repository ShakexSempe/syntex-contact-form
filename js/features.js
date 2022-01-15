// VARIABLES
const form = document.getElementById("form");
const feature = document.getElementById("feature");
const container = document.querySelector(".feature-container");
const list = document.querySelector("feature-list");
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editID = '';

console.log(form);
console.log(feature);
console.log(container);
console.log(submitBtn);
console.log(clearBtn);