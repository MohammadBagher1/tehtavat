function kirjain(merkki) {
    if (merkki.length == 1 && merkki.match(/[a-öA-Ö]/i)) {
        console.log("Annettu merkki on kirjain");
    }
    else {
        console.log("Annettu merkki ei ole kirjain");
    }
}
kirjain("b");
kirjain("5");
kirjain("o");
