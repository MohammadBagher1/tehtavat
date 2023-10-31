function voitapio(myynti, osto) {
    myynti = parseInt(myynti);
    osto = parseInt(osto);
    if ((myynti - osto) > 0) {
        console.log("Sait voittoa: " + (myynti - osto));
    }
    else {
        console.log("Tappiosi oli " + (myynti - osto));
    }
}
voitapio(15, 15);
voitapio(20, 15);
voitapio(15, 20);