function kiNum(merkki) {
    let kirjain = /[a-öA-Ö]/i;
    let numero = /[0-9]/i;
    if (merkki.length == 1 && merkki.match(kirjain)) {
        console.log("Merkki on kirjain");
    }
    else if (merkki.match(numero)) {
        console.log("Merkki on numero");
    }
    else {
        console.log("Merkki on erikoismerkki");}
}
kiNum("a");
kiNum("1");
kiNum("+");