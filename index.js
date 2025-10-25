import { ittarData } from '/data.js';


const itemListsEl = document.getElementById("itemLists");
const pageNumberEl = document.getElementById("pageListContainer");

let pageCount = 0;
let maxperPage = 9;


pageNumberEl.addEventListener("click", function(e) {
    console.log(e.target.id);
    if (e.target.id && e.target.classList.contains("page-list-container")) {
        console.error("Did not click a page number.")
    }
    else if(e.target.id) {
        pageSections(e.target.id.replace("page", ''));
    }
    else {
        console.error("Empty Id");
    }
})

function render(array) {
    const itemListsHTML = array.map(function(ittar) {
        return `
        <div>
            <img src="/images/${ittar.image}"/>
            <p>${ittar.name} <span>${ittar.size}</span></p>
            <p>£${ittar.price}</p>
        </div>
        `
    }).join('');
    itemListsEl.innerHTML = itemListsHTML;
}

function totalPageCount() {
    let pageNumberHTML = ``;
    while (pageCount < ittarData.length / 9) {
        pageCount++;
        pageNumberHTML += `
        <div class="page-number-container" id="page${pageCount}">
            ${pageCount}
        </div>
        `
    }
    pageNumberEl.innerHTML = pageNumberHTML;
}

function pageSections(pageNumber = 1) {
    const startIndex = (pageNumber - 1) * maxperPage;
    const endIndex = startIndex + maxperPage;
    const pageData = ittarData.slice(startIndex, endIndex);
    render(pageData);
}
pageSections();
totalPageCount();