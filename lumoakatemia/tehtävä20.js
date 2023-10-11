const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna suorakulmion pituus: ", function (length) {
    rl.question("Anna suorakulmion leveys: ", function (breadth) {
        const pituus = parseFloat(length);
        const leveys = parseFloat(breadth);

        if (!isNaN(pituus) && !isNaN(leveys)) {
            const pinta_ala = pituus * leveys;
            console.log("Suorakulmion pinta-ala on: " + pinta_ala);
        }

        rl.close();
    });
});
