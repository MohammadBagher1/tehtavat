const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna p\u00E4iv\u00E4t: ", function (days) {
    days = parseInt(days);
    let years = Math.floor(days / 365);
    let month = Math.floor((days % 365) / 30);
    days = days - (years * 365 + month * 30);
    console.log("Vuodet: " + years);
    console.log("kuukaudet: " + month);
    console.log("P\u00E4iv\u00E4t: " + days);

    rl.close();
});