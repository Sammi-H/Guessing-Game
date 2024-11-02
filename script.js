let correctNumber = 55;
let count = 0;

function guessNumber(guess) {
    count++;


    const guessList = document.querySelector(".guess-list");
    const li = document.createElement("li");
    li.textContent = guess;
    guessList.appendChild(li);




    if (guess === correctNumber) {
        document.querySelector(".result").textContent = "Congratulations! You found the right number: " + correctNumber + ". Total guesses: " + count;
    } else if (guess > 100) {
        document.querySelector(".result").textContent = "Max value = 100";
    } else if (guess > correctNumber) {
        document.querySelector(".result").textContent = "Number is too high";
    } else {
        document.querySelector(".result").textContent = "Number is too low";
    }
}






const button = document.querySelector(".button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
    const userInput = input.value;
    const guess = Number(userInput);
    
    if (userInput.trim() === "") {
        alert("Please enter a number.");
        return;
    }

    guessNumber(guess);
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const userInput = input.value;
        const guess = Number(userInput);
        
        if (userInput.trim() === "") {
            alert("Please enter a number.");
            return;
        }

        guessNumber(guess);
    }
});