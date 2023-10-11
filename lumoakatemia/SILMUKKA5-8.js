// tehtävä 5 Tee ohjelma, joka etsii maksimiarvon taulukosta [6, 7, 2, 4, 3, 8, 1]
function codeBlock1() {
    console.log('teht\u00E4v\u00E4 5:');
    const taulukko = [6, 7, 2, 4, 3, 8, 1];
    let maksimi = 0;

    for (let i = 0; i < taulukko.length; i++) {
        if (taulukko[i] > maksimi) {
            maksimi = taulukko[i];
        }
    }

    process.stdout.write('Taulukon [ ');
    for (let i = 0; i < taulukko.length; i++) {
        process.stdout.write(`${taulukko[i]} `);
    }
    console.log(`] maksimiarvo on ${maksimi}`);
    console.log('---------------------------------------------')
}
codeBlock1();


//tehtävä 6 Tee ohjelma, joka laskee keskiarvon taulukosta [6, 7, 2, 4, 3, 8, 1] ilman Math-luokan metodia
function codeBlock2() {
    console.log('teht\u00E4v\u00E4 6:');
    const tallukko = [6, 7, 2, 4, 3, 8, 1];
    const keskiarvo = tallukko.reduce((a, b) => a + b, 0) / tallukko.length;

    console.log(`Taulukon [ ${tallukko.join(' ')} ] keskiarvo on ${keskiarvo}`);

    
    console.log('------------------------------------------------------------')
}
codeBlock2();

//tehtävä 7 Tee ohjelma, joka tekee uuden taulukon taulukosta ["a", "b", "c", "d", "e", "f"] siten, että kaikki kirjaimet ovat isoja
function codeBlock3() {
    console.log('teht\u00E4v\u00E4 7:');
    const taulu = ["a", "b", "c", "d", "e", "f"];
    const isot = taulu.map(arvo => arvo.toUpperCase());

    process.stdout.write('Taulukon kirjaimet isoina: [ ');
    isot.forEach(arvo => {
        process.stdout.write(`${arvo} `);
    });
    console.log(']');

    console.log('------------------------------------------------------------')
}
codeBlock3();

//tehtävä 8: Tee ohjelma, joka etsii seitsemännen parittoman esiintymän taulukosta [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3]
function codeBlock4() {
    console.log('teht\u00E4v\u00E4 8:');
    const taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
    let laskuri = 0;

    for (let i = 0; i < taulukko.length; i++) {
        if (taulukko[i] % 2 !== 0) {
            laskuri++;

            if (laskuri === 7) {
                console.log(`Taulukon 6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3 seitsem\u00E4s pariton luku on: ${taulukko[i]}`);
                break;
            }
        }
    }

    console.log('------------------------------------------------------------')
}
codeBlock4();

