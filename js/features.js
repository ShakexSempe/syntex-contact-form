// VARIABLES
const form = document.getElementById("features");
const feature = document.getElementById("feature");
const featureDescription = document.getElementById("feature-description");
const container = document.querySelector(".feature-container");
const list = document.querySelector(".feature-list");
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editID = '';

console.log(form);
console.log(feature);
console.log(list);
console.log(featureDescription);
console.log(container);
console.log(submitBtn);
console.log(clearBtn);

const addItem = (e) => {
    console.log(feature.value);
    console.log(featureDescription.value);
    const nameValue = feature.value;
    const descValue = featureDescription.value;
    const id = new Date().getTime().toString();

    if(nameValue && !editFlag) {
        const element = document.createElement('article');

        element.classList.add('input-div');
        // add id
        const attribute = document.createAttribute('data-id');
        attribute.value = id;
        element.setAttributeNode(attribute);

        element.innerHTML = `<label for="item-1">feature</label>
        <input 
            name="item-1"
            id="item-1" 
            title="Item 1" 
            class="item-name" 
            type="text" 
            tabindex="40"
            minlength="1" 
            value="${nameValue}"
            placeholder="${nameValue}" 
            required>

        <label for="item-name">Description</label>
        <textarea name="item-description" id="item-1-description" title="Item description" cols="30" rows="5"
            tabindex="41" 
            minlength="1" 
            value="${descValue}"
            placeholder="${descValue}" 
            required></textarea>`;

        list.appendChild(element);
    }
}

submitBtn.addEventListener('click' , addItem);
