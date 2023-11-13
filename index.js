let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")

function startGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent += ` ${sum}`
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
    console.log(message)
}

// startGame()