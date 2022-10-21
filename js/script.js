const parrots = [
    "img/bobrossparrot.gif",
    "img/explodyparrot.gif",
    "img/fiestaparrot.gif",
    "img/metalparrot.gif",
    "img/revertitparrot.gif",
    "img/tripletsparrot.gif",
    "img/unicornparrot.gif",
];


function setupGameBoard() {
    const cardNumber = prompt("Selecione o número de cartas! (Somente pares, entre 4-14)");
    const gameBoard = document.querySelector(".game-container");
    const x = (cardNumber/2);
    const newParrots = parrots.slice(0,x).concat(parrots.slice(0,x));
    const randomParrots = newParrots.sort(() => Math.random() - 0.5);

    if(cardNumber < 4 || cardNumber > 14 || cardNumber % 2 !== 0) {
        alert("O número inserido é inválido! Escolha novamente");
        setupGameBoard()
    }

    else {
        for(let i = 0; i < cardNumber; i++) {
            gameBoard.innerHTML += `
            <div class="card-container">
                <div class="card">
                    <div class="card-back">
                        <img src="img/back.png" alt="">
                    </div>
                    <div class="card-front">
                        <img src="${randomParrots[i]}" alt="">
                    </div>
                </div>
            </div>
            `
        }
        flipCard()        
        if (cardNumber == 4) {
            gameBoard.classList.add("board4")
        }
        else if (cardNumber == 6) {
            gameBoard.classList.add("board6")
        }
        else if (cardNumber== 8) {
            gameBoard.classList.add("board8")
        }
        else if (cardNumber == 10) {
            gameBoard.classList.add("board10")
        }
        else if (cardNumber == 12) {
            gameBoard.classList.add("board12")
        }
        else {
            gameBoard.classList.add("board14")
        }
    }
}

function flipCard() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("flip-card")
        })
    })
}

function shuffleCards() {
    const randomParrots = parrots.sort(() => Math.random() - 0.5);
    return randomParrots
}

/*function addCards() {
    const gameBoard = document.querySelector('.game-container');
    const shuffledCards = shuffleCards();
    let count = askCardNumber();

    for(count; count < cardNumber; count++) {
        gameBoard.innerHTML += `
        <div class="card-container">
        <div class="card">
            <div class="card-back">
                <img src="img/back.png" alt="">
            </div>
            <div class="card-front">
            <img src="${shuffledCards[count]}" alt="">
            </div>
        </div>
    </div>
        `
    }
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle('flip-card')
        })
    })
}*/

shuffleCards()
setupGameBoard();