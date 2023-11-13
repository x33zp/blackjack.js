let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard] //array
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame();
}

function renderGame() {
    // 3. Render the cards on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`
    sumEl.textContent = `Sum: ${sum}`
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 8
    // 2. Add the new card to the sum variable
    sum += card
    // 3. Call startGame()
    renderGame()
}