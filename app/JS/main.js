import '../CSS/style.css'
import hytopiaWorlds from "../JS/worlds.js"

const Worlds = [
    {"id": 101, "image": "../JS/images/HytopiaWorld1.png", "rarity": "Common", "price": 0.4596, "rank": 7855},
    {"id": 102, "image": "../JS/images/HytopiaWorld1.png", "rarity": "Uncommon", "price": 0.8923, "rank": 4321},
    {"id": 103, "image": "../JS/images/HytopiaWorld1.png", "rarity": "Rare", "price": 1.2375, "rank": 1254},
    {"id": 104, "image": "../JS/images/HytopiaWorld1.png", "rarity": "Epic", "price": 2.5000, "rank": 678},
    {"id": 105, "image": "../JS/images/HytopiaWorld1.png", "rarity": "Legendary", "price": 5.7500, "rank": 111},
    {"id": 106, "image": "../JS/images/HytopiaWorld1.png", "rarity": "Mythic", "price": 12.0000, "rank": 25},
    {"id": 107, "image": "../JS/images/HytopiaWorld1.png", "rarity": "Common", "price": 0.3500, "rank": 8000},
    {"id": 108, "image": "../JS/images/HytopiaWorld1.png", "rarity": "Uncommon", "price": 0.6500, "rank": 4500},
    {"id": 109, "image": "../JS/images/HytopiaWorld1.png", "rarity": "Rare", "price": 1.9000, "rank": 1340},
    {"id": 110, "image": "../JS/images/HytopiaWorld1.png", "rarity": "Epic", "price": 3.3000, "rank": 567}
]

const DOMSelectors = {
    html: document.querySelector("html"),
    body: document.querySelector("body"),
    start: document.querySelector(".buttonS"),
    box: document.querySelector(".box"),
}

DOMSelectors.start.addEventListener("click", function(event) {
    event.preventDefault();
    startMark();
    allCards(Worlds);
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
        allButton();
        idButton();
        rarityButton();
        rankButton();
        priceButton();
}

function allButton() {
    let container = document.querySelector(".container")
    let all = document.querySelector(".all")
    all.addEventListener("click", function() {
        container.innerHTML = '<div class="header-place">';
        allCards(Worlds);
    }
) 
}

function idButton() {
    let id = document.querySelector(".id")
    id.addEventListener("click", function() {
        addFormID();
        let form = document.querySelector("form") 
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let input1 = document.querySelector(".input1").value
            let input2 = document.querySelector(".input2").value
            resetContainer();
            resetHTML();
            Worlds
                .filter(world => world.id >= input1 && world.id <= input2)
                .forEach(world => addCards(world))
    })
    })       
}

function rarityButton() {
    let rarity = document.querySelector(".rarity")
    rarity.addEventListener("click", function() {
        addFormRarity();
        let form = document.querySelector("form") 
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let input = document.querySelector(".input").value
            resetContainer();
            resetHTML();
            Worlds
                .filter(world => world.rarity == input)
                .forEach(world => addCards(world))
    })
    })       
}

function rankButton() {
    let rank = document.querySelector(".rank")
    rank.addEventListener("click", function() {
        addFormRank();
        let form = document.querySelector("form") 
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let input1 = document.querySelector(".input1").value
            let input2 = document.querySelector(".input2").value
            resetContainer();
            resetHTML();
            Worlds
                .filter(world => world.rank >= input1 && world.rank <= input2)
                .forEach(world => addCards(world))
    })
    })       
}

function priceButton() {
    let price = document.querySelector(".price")
    price.addEventListener("click", function() {
        addFormPrice();
        let form = document.querySelector("form") 
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let input1 = document.querySelector(".input1").value
            let input2 = document.querySelector(".input2").value
            resetContainer();
            resetHTML();
            Worlds
                .filter(world => world.price >= input1 && world.price <= input2)
                .forEach(world => addCards(world))
    })
    })       
}

function allCards(array) {
    array.forEach(world => addCards(world))
}

function addCards(world) {
    let container = document.querySelector(".container")
    container.insertAdjacentHTML(
        "beforeend",
        `<div class="world">
            <h2>World #${world.id}</h2>
            <div class="imageholder">
                <img src="${world.image}" alt="World Image" class="image">
            </div>
            <h3>${world.rarity}</h3>
            <h4>Rank: ${world.rank}/10000</h4>
            <h4>${world.price} ETH</h4>
        </div>`
    )
};

function resetContainer() {
    let container = document.querySelector(".container")
    container.innerHTML = '<div class="header-place">'
}

function resetHTML() {
    let header = document.querySelector(".header")
    header.innerHTML = 
        `<h1>Hytopia Marketplace</h1>
        <div class="header-button">
            <button class="all">All</button>
            <button class="id">Sort by ID</button>
            <button class="rarity">Sort by Rarity</button>
            <button class="rank">Sort by Rank</button>
            <button class="price">Sort by Price</button>
        </div>`
}

function addFormID() {
    let header = document.querySelector(".header")
    resetHTML();
    header.insertAdjacentHTML("beforeend", `
        <h3 class="requirement">Enter an ID Range:</h3>
    <form action="">
        <input class="input1" type="number" placeholder="Lower ID..." min="100" max="1000">
        <input class="input2" type="number" placeholder="Higher ID..."  min="100" max="1000">
        <button>Submit</button>  
    </form>
    </div>`);
}

function addFormRarity() {
    let header = document.querySelector(".header")
    resetHTML();
    header.insertAdjacentHTML("beforeend", `
        <h3 class="requirement">Enter a Rarity:</h3>
    <form action="">
        <input class="input" type="text" placeholder="Enter Rarity...">
        <button>Submit</button>  
    </form>
    </div>`);
}

function addFormRank() {
    let header = document.querySelector(".header")
    resetHTML();
    header.insertAdjacentHTML("beforeend", `
        <h3 class="requirement">Enter a Rank Range:</h3>
    <form action="">
        <input class="input1" type="number" placeholder="Lower Rank..." min="0" max="10000">
        <input class="input2" type="number" placeholder="Higher Rank..."  min="0" max="10000">
        <button>Submit</button>  
    </form>
    </div>`);
}

function addFormPrice() {
    let header = document.querySelector(".header")
    resetHTML();
    header.insertAdjacentHTML("beforeend", `
        <h3 class="requirement">Enter a Price Range:</h3>
    <form action="">
        <input class="input1" type="number" placeholder="Lower Price..." min="0" max="100">
        <input class="input2" type="number" placeholder="Higher Price..." min="0" max="100">
        <button>Submit</button>  
    </form>
    </div>`);
}