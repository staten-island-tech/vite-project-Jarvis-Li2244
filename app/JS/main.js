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
    header: document.querySelector(".header"),
    container: document.querySelector(".container"),
    all: document.querySelector(".all"),
    id: document.querySelector(".id"),
    rarity: document.querySelector(".rarity"),
    rank: document.querySelector(".rank"),
    price: document.querySelector(".price"),
}

DOMSelectors.start.addEventListener("click", function(event) {
    event.preventDefault();
    startMark();
})

function startMark() {
    DOMSelectors.box.remove();
    allCards(Worlds);
    resetHeader();
}


function allButtons() {
    let all = document.querySelector(".all")
    let id = document.querySelector(".id")
    let rarity = document.querySelector(".rarity")
    let rank = document.querySelector(".rank")
    let price = document.querySelector(".price")


    all.addEventListener("click", function() {
        resetContainer();
        resetHeader();
        allCards(Worlds);
        }
    ) 

    id.addEventListener("click", function() {
        addForm("Enter an ID Range:", "number");
        let form = document.querySelector("form") 
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let input1 = document.querySelector(".input1").value
            let input2 = document.querySelector(".input2").value
            resetContainer();
            resetHeader();
            Worlds
                .filter(world => world.id >= input1 && world.id <= input2)
                .forEach(world => addCards(world))
            }
        )
        }   
    )       

    rarity.addEventListener("click", function() {
        addForm("Enter a Rarity:", "text");
        let form = document.querySelector("form") 
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let input1 = document.querySelector(".input1").value
            resetContainer();
            resetHeader();
            Worlds
                .filter(world => world.rarity == input1)
                .forEach(world => addCards(world))
            }
        )
        }
    )       

    rank.addEventListener("click", function() {
        addForm("Enter a Rank Range:", "number");
        let form = document.querySelector("form") 
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let input1 = document.querySelector(".input1").value
            let input2 = document.querySelector(".input2").value
            resetContainer();
            resetHeader();
            Worlds
                .filter(world => world.rank >= input1 && world.rank <= input2)
                .forEach(world => addCards(world))
            }
        )
        }
    )       

    price.addEventListener("click", function() {
        addForm("Enter a Price Range:", "number");
        let form = document.querySelector("form") 
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let input1 = document.querySelector(".input1").value
            let input2 = document.querySelector(".input2").value
            resetContainer();
            resetHeader();
            Worlds
                .filter(world => world.price >= input1 && world.price <= input2)
                .forEach(world => addCards(world))
            }
        )
        }
    )       
}

function allCards(array) {
    array.forEach(world => addCards(world))
}

function addCards(world) {
    DOMSelectors.container.insertAdjacentHTML(
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
    DOMSelectors.container.innerHTML = '<div class="header-place">'
    allButtons();
}

function resetHeader() {
    DOMSelectors.header.innerHTML = 
        `<h1>Hytopia Marketplace</h1>
        <div class="header-button">
            <button class="all">All</button>
            <button class="id">Sort by ID</button>
            <button class="rarity">Sort by Rarity</button>
            <button class="rank">Sort by Rank</button>
            <button class="price">Sort by Price</button>
        </div>`
    allButtons();
}

function addForm(reqLabel, formType) {
    if (formType == "text") {
        DOMSelectors.header.insertAdjacentHTML("beforeend", `
            <h3 class="requirement">${reqLabel}</h3>
        <form action="">
            <input class="input1" type="text" placeholder="Enter Rarity...">
            <button>Submit</button>  
        </form>
        </div>`);
    } else {
        DOMSelectors.header.insertAdjacentHTML("beforeend", `
            <h3 class="requirement">${reqLabel}</h3>
        <form action="">
            <input class="input1" type="number" placeholder="Minimum...">
            <input class="input2" type="number" placeholder="Maximum...">
            <button>Submit</button>  
        </form>
        </div>`);
    }
}
