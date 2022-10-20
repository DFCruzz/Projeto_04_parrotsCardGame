const Parrots = [
    "img/bobrossparrot.gif",
    "img/explodyparrot.gif",
    "img/fiestaparrot.gif",
    "img/metalparrot.gif",
    "img/revertitparrot.gif",
    "img/tripletsparrot.gif",
    "img/unicornparrot.gif",
];

function setupGameBoard() {
    const boardSize = document.querySelector(".game-container");
    const cardNumber = prompt("Selecione o número de cartas! (Somente pares, entre 4-14)");

    if(cardNumber < 4 || cardNumber > 14 || cardNumber % 2 !== 0) {
        alert("O número inserido é inválido! Escolha novamente")
        setupGameBoard()
    }

    else {
        if (cardNumber == 4) {
            boardSize.classList.add("board4")
        }
        else if (cardNumber == 6) {
            boardSize.classList.add("board6")
        }
        else if (cardNumber== 8) {
            boardSize.classList.add("board8")
        }
        else if (cardNumber == 10) {
            boardSize.classList.add("board10")
        }
        else if (cardNumber == 12) {
            boardSize.classList.add("board12")
        }
        else {
            boardSize.classList.add("board14")
        }
    }
}

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
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle('flip-card')
            console.log(true);
        })
    })
}

addCards()
setupGameBoard()