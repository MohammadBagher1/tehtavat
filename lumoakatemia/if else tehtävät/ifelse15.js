function anestys(ika) {
    ika = parseInt(ika);
    if (ika >= 18) {
        console.log("Voi \u00E4\u00E4nest\u00E4\u00E4");
    }
    else if (isNaN(ika)) {
        console.log("unohdit numeron.");
    }
    else {
        console.log("Ei voi \u00E4\u00E4nest\u00E4\u00E4");
    }
}
anestys(10);
anestys(20);
anestys("kolmekymmentä");