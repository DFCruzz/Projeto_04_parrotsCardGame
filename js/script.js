const parrots = [
    {name: "bobross", imgSrc: "img/bobrossparrot.gif" },
    {name: "explody", imgSrc: "img/explodyparrot.gif" },
    {name: "fiesta", imgSrc: "img/fiestaparrot.gif" },
    {name: "metal", imgSrc: "img/metalparrot.gif" },
    {name: "triplet", imgSrc: "img/tripletsparrot.gif" },
    {name: "unicorn", imgSrc: "img/unicornparrot.gif" },
    {name: "revertit", imgSrc: "img/revertitparrot.gif" }
];
let plays = 0;

function endGame() {
    const endGameArray = document.querySelectorAll(".card:not(.flip-card)");

    if(endGameArray.length !== 0) {
        console.log(endGameArray)
    }
    else {
        setTimeout(() => alert("Você ganhou em " + plays + " jogadas!"), 1000)
        setTimeout(() => window.location.reload(), 2000)
    }
}


function startGame() {
    const cardNumber = prompt("Selecione o número de cartas! (Somente pares, entre 4-14)");
    const gameBoard = document.querySelector(".game-container");
    const x = (cardNumber/2);
    const newParrots = parrots.slice(0,x).concat(parrots.slice(0,x));
    const randomParrots = newParrots.sort(() => Math.random() - 0.5);

    if(cardNumber < 4 || cardNumber > 14 || cardNumber % 2 !== 0) {
        alert("O número inserido é inválido! Escolha novamente");
        startGame();
    }

    else {
        for(let i = 0; i < cardNumber; i++) {
            gameBoard.innerHTML += `
            <div class="card-container">
                <div class="card" name="${randomParrots[i].name}">
                    <div class="card-back">
                        <img src="img/back.png" alt="">
                    </div>
                    <div class="card-front">
                        <img src="${randomParrots[i].imgSrc}" alt="">
                    </div>
                </div>
            </div>
            `
        }
        flipCard();      
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
};

function flipCard() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("flip-card")
            card.classList.add("flipped")
            plays++;
            checkCards()
            endGame()
        })
    })
    
};

function checkCards() {;
    const flippedCards = document.querySelectorAll(".flipped");

    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            console.log("correct")
            flippedCards.forEach((flippedCard) => {
                flippedCard.classList.remove("flipped");                
            })
        }
        else {
            console.log("incorrect")
            flippedCards.forEach((flippedCard) => {
                flippedCard.classList.remove("flipped");
                setTimeout(() => flippedCard.classList.remove("flip-card"), 600);            })
        }
    }
}

function shuffleCards() {
    const randomParrots = parrots.sort(() => Math.random() - 0.5);
    return randomParrots
}
shuffleCards()
startGame();