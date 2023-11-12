// if...else conditions
// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 2
let secondCard = 11
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}

console.log(sum)

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
if (age < 21) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!")
}