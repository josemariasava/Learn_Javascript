let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [] // Array definition
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
/* With getElementById()*/
// let sumEl = document.getElementById("sum-el")
/* With query selector */
/* points to the tag and not to the Element ID - asking for an element by its selector */ 
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#card-el")

cards = [firstCard,secondCard] // array of cards 
let sum = cards[0] + cards[1]

function startGame() {
    renderGame()
}

function renderGame() {
    // Render first and second cards on the page 
    cardsEl.textContent = "Cards: "
    // for loop to rendere all the cards 
    for (let i = 0; i < cards.length; i++) {
        
        cardsEl.textContent += cards[i] + " "
    }
    // Render the sum on the page 
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}

function newCard() {
    
    let card = getRandomCard()

    sum += card

    cards.push(card)

    renderGame()
}

function getRandomCard() {

}