function tarkistaJaollisuus(luku) {
    if (luku % 5 === 0 && luku % 11 === 0) {
        console.log("Luku on jaollinen sek\u00E4 5:ll\u00E4 ett\u00E4 11:s\u00E4a");
    } else if (luku % 5 === 0 || luku % 11 === 0) {
        console.log("Luku on jaollinen joko 5:ll\u00E4 tai 11:st\u00E4");
    } else {
        console.log("Luku ei ole jaollinen 5:ll\u00E4 eik\u00E4 11:st\u00E4");}
}

tarkistaJaollisuus(41);
tarkistaJaollisuus(45);
tarkistaJaollisuus(50);

