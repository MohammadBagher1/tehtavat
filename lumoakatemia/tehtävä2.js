//teht�v� 9
console.log('teht\u00E4v\u00E4 9.')
var kmm, maill;
kmm = 50;
maill = kmm / 1.609;
console.log(maill);
console.log('----')

//teht�v� 10
console.log('teht\u00E4v\u00E4 10.')
var sent, tuuma;
tuuma = 50;
sent = tuuma * 2.54;
console.log(sent);
console.log('----')

//teht�v� 11
console.log('teht\u00E4v\u00E4 11.')
var sentt, tuumaa;
sentt = 50;
tuumaa = sentt / 2.54;
console.log(tuumaa);
console.log('----')

//teht�v� 12
console.log('teht\u00E4v\u00E4 12.')
var yard, metri;
yard = 50;
metri = yard * 0.9144;
console.log(metri);
console.log('----')

//teht�v� 13
console.log('teht\u00E4v\u00E4 13.')
var yardd, metrii;
metrii = 50;
yardd = metrii * 1.0936133;
console.log(yardd);
console.log('----')

//teht�v� 14
console.log('teht\u00E4v\u00E4 14.')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("anna numeron ja vaihdan sen farenhaitista celsiuksin: ", function (input) {
    const fah = parseFloat(input);
    if (!isNaN(fah)) {
        const cel = ((fah - 32) * 5) / 9;
        console.log(cel);
    } else {
        console.log("Virheellinen sy�te.");
    }

    rl.close();
});

