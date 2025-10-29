import { ittarData } from '/data.js';


const itemListsEl = document.getElementById("itemLists");
const pageNumberEl = document.getElementById("pageListContainer");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const sizeDropdown = document.getElementById("mlDropdown");



let pageCount = 1;
let maxperPage = 9;
let lastData = [];



pageNumberEl.addEventListener("click", function(e) {
    console.log(e);
    if (e.target.id && e.target.classList.contains("page-list-container")) {
        console.error("Did not click a page number.")
    }
    else if(e.target.id) {
        pageSections(e.target.id.replace("page", ''), lastData);
    }
    else {
        console.error("Empty Id");
    }
})



applyFilterBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const minPrice =  Number(minPriceInput.value);
    const size = Number(sizeDropdown.value);
    const maxPrice = Number(maxPriceInput.value);     

    const filteredIttars = ittarData.filter(function(ittar) {
        const minPriceCheck = minPrice ? ittar.price >= minPrice : true;
        const maxPriceCheck = maxPrice ? ittar.price <= maxPrice : true;
        const sizeCheck = size ? ittar.size === size : true;

        return minPriceCheck && maxPriceCheck && sizeCheck;
    })
    console.log(filteredIttars);
    totalPageCount(filteredIttars);
})

function render(data) {
    const itemListsHTML = data.map(function(ittar) {
        return `
        <div class="item">
            <img src="/images/${ittar.image}"/>
            <p class="ittar-name-p">${ittar.name} <span class="ittar-size-span">${ittar.size}ML</span></p>
            <p class="ittar-price-p">£${ittar.price}</p>
        </div>
        `
    }).join('');
    itemListsEl.innerHTML = itemListsHTML;
}

function totalPageCount(data) {
    let pageNumberHTML = ``;

    let dividedBy = data.length / 9;
    let remainder = data.length % 9;
    
    if (remainder > 0) {
        dividedBy++;
    }
    
    while(pageCount <= dividedBy) { 
        pageNumberHTML +=`
        <div class="page-number-container" id="page${pageCount}">
            ${pageCount}
        </div>`
        pageCount++;
    }

    pageNumberEl.innerHTML = pageNumberHTML;    
    pageCount = 1;
    lastData = data;
    pageSections(undefined, data);
}

function pageSections(pageNumber = 1, data) {
    const startIndex = (pageNumber - 1) * maxperPage;
    const endIndex = startIndex + maxperPage;

    console.log(pageNumber)

    const pageData = data.slice(startIndex, endIndex);
    render(pageData);
}
totalPageCount(ittarData);