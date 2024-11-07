import '../CSS/style.css'
import Worlds from "../JS/worlds.js"

const DOMSelectors = {
    html: document.querySelector("html"),
    body: document.querySelector("body"),
    start: document.querySelector(".buttonS"),
    box: document.querySelector(".box"),
}

DOMSelectors.start.addEventListener("click", function(event) {
    event.preventDefault();
    startMark();
    addCards(Worlds);
})

function startMark() {
    DOMSelectors.box.remove();
    DOMSelectors.body.insertAdjacentHTML(
        "beforeend",
        `<div class="header">
            <h1>Hytopia Marketplace</h1>
            <div class="header-button">
                <button class="all">All</button>
                <button class="id">Sort by ID</button>
                <button class="rarity">Sort by Rarity</button>
                <button class="rank">Sort by Rank</button>
                <button class="price">Sort by Price</button>
            </div>
        </div>
        <div class="container">
            <div class="header-place">
            </div>
        </div>`
        )
}

function addCards(Worlds) {
    let container = document.querySelector(".container")
    Worlds.forEach(world => 
    container.insertAdjacentHTML(
        "beforeend",
        `<div class="world">
            <h2>World ${world.id}</h2>
            <div class="imageholder">
                <img src="${world.image}" alt="World Image" class="image">
            </div>
            <h3>${world.rarity}</h3>
            <h4>${world.rank}/10000</h4>
            <h4>${world.price}</h4>
        </div>`
    )
)
};


function specificCards(Worlds, filterReq, filterSpec) {
    let container = document.querySelector(".container")
    container.innerHTML = ""
    Worlds.filter(world => world.filterReq )
}
