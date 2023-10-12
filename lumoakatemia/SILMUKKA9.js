//tehtävä 9

    console.log('teht\u00E4v\u00E4 9:');
    let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
    taulukko.sort((a, b) => a - b);
    let pituus = taulukko.length;
    console.log("Toiseksi suurin arvo on " + taulukko[pituus - 2]);
    console.log('---------------------------------------------')

