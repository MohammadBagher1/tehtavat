const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkGuess(secretNumber, guess) {
    let correct = 0;
    let wrongPosition = 0;

    for (let i = 0; i < secretNumber.length; i++) {
        if (guess[i] === secretNumber[i]) {
            correct++;
        } else if (secretNumber.includes(guess[i])) {
            wrongPosition++;
        }
    }

    return [correct, wrongPosition];
}

function main() {
    const secretNumber = "4321";
    console.log("Tervetuloa pelaamaan Mastermind-peli\u00E4!");
    console.log("Arvaa numero, siin\u00E4 on 4 eri numeroa.");
    let remainingGuesses = 5;

    function takeUserInput() {
        rl.question("Sy\u00F6t\u00E4 arvauksesi: ", (userGuess) => {
            if (userGuess === secretNumber) {
                console.log("Oikein! Voitit pelin.");
                rl.close();
            } else {
                const result = checkGuess(secretNumber, userGuess);
                console.log(result[0] + " oikein, " + result[1] + " v\u00E4\u00E4r\u00E4ll\u00E4 paikalla.");
                remainingGuesses--;

                if (remainingGuesses === 0) {
                    console.log("Voih, h\u00E4visit pelin. Oikea numero oli " + secretNumber);
                    rl.close();
                } else {
                    console.log("Sinulla on " + remainingGuesses + " arvausta j\u00E4ljell\u00E4.");
                    takeUserInput();
                }
            }
        });
    }

    takeUserInput();
}

main();

