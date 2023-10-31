function tarkastaKokonaisluvut(a, b) {
    try {
        // Yritetään muuntaa annetut arvot kokonaisluvuiksi.
        const lukuA = parseInt(a);
        const lukuB = parseInt(b);

        // Tarkistetaan, ovatko luvut NaN-arvoja, mikä osoittaa virheellisen muunnoksen.
        if (isNaN(lukuA) || isNaN(lukuB)) {
            throw new Error("Et antanut kokonaislukuja");
        }

        // Vertaillaan, ovatko luvut samat.
        if (lukuA === lukuB) {
            return "Antamasi luvut ovat samat.";
        } else {
            return "Antamasi luvut eivät ole samat.";
        }
    } catch (error) {
        // Jos tapahtuu virhe (esim. muunnos ei onnistu), palautetaan virheviesti.
        return error.message;
    }
}

// Esimerkkejä käytöstä:
console.log(tarkastaKokonaisluvut(5, 5)); // Tulostaa "Antamasi luvut ovat samat."
console.log(tarkastaKokonaisluvut(5, "kymmenen")); // Tulostaa "Et antanut kokonaislukuja"
console.log(tarkastaKokonaisluvut("3", 3)); // Tulostaa "Antamasi luvut ovat samat."
