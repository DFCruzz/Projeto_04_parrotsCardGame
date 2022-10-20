const Parrots = [
    "img/bobrossparrot.gif",
    "/img/explodyparrot.gif",
    "img/fiestaparrot.gif",
    "img/metalparrot.gif",
    "img/revertitparrot.gif",
    "img/tripletsparrot.gif",
    "img/unicornparrot.gif",
];



function addCards()  {
    const testDiv = document.querySelector('.game-container')
    for(let count = 0; count < Parrots.length; count++) {
        testDiv.innerHTML += `
        <div class="card-container">
        <div class="card">
            <div class="card-back">
                <img src="img/back.png" alt="">
            </div>
            <div class="card-front">
            <img src="${Parrots[count]}" alt="">
            </div>
        </div>
    </div>
        `
    }
}

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener("click", () => {
        console.log(true);
    })
})

addCards()