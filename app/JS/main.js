import '../CSS/style.css'
const DOMSelectors = {
    html: document.querySelector("html"),
    body: document.querySelector("body"),
    start: document.querySelector(".buttonS"),
    box: document.querySelector(".box")
}

const Worlds = [
    {"id": 101, "image": "placeholder", "rarity": "common", "price": 0.4596, "rank": 7855},
    {"id": 102, "image": "placeholder", "rarity": "uncommon", "price": 0.8923, "rank": 4321},
    {"id": 103, "image": "placeholder", "rarity": "rare", "price": 1.2375, "rank": 1254},
    {"id": 104, "image": "placeholder", "rarity": "epic", "price": 2.5000, "rank": 678},
    {"id": 105, "image": "placeholder", "rarity": "legendary", "price": 5.7500, "rank": 111},
    {"id": 106, "image": "placeholder", "rarity": "mythic", "price": 12.0000, "rank": 25},
    {"id": 107, "image": "placeholder", "rarity": "common", "price": 0.3500, "rank": 8000},
    {"id": 108, "image": "placeholder", "rarity": "uncommon", "price": 0.6500, "rank": 4500},
    {"id": 109, "image": "placeholder", "rarity": "rare", "price": 1.9000, "rank": 1340},
    {"id": 110, "image": "placeholder", "rarity": "epic", "price": 3.3000, "rank": 567}
]

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
            <button class="common">Common</button>
            <button class="uncommon">Uncommon</button>
            <button class="rare">Rare</button>
            <button class="epic">Epic</button>
            <button class="legendary">Legendary</button>
            <button class="mythic">Mythic</button>
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

