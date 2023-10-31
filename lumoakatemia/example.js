function tarkastaKokonaisluvut(a, b) {
    try {
        // Yritet��n muuntaa annetut arvot kokonaisluvuiksi.
        const lukuA = parseInt(a);
        const lukuB = parseInt(b);

        // Tarkistetaan, ovatko luvut NaN-arvoja, mik� osoittaa virheellisen muunnoksen.
        if (isNaN(lukuA) || isNaN(lukuB)) {
            throw new Error("Et antanut kokonaislukuja");
        }

        // Vertaillaan, ovatko luvut samat.
        if (lukuA === lukuB) {
            return "Antamasi luvut ovat samat.";
        } else {
            return "Antamasi luvut eiv�t ole samat.";
        }
    } catch (error) {
        // Jos tapahtuu virhe (esim. muunnos ei onnistu), palautetaan virheviesti.
        return error.message;
    }
}

// Esimerkkej� k�yt�st�:
console.log(tarkastaKokonaisluvut(5, 5)); // Tulostaa "Antamasi luvut ovat samat."
console.log(tarkastaKokonaisluvut(5, "kymmenen")); // Tulostaa "Et antanut kokonaislukuja"
console.log(tarkastaKokonaisluvut("3", 3)); // Tulostaa "Antamasi luvut ovat samat."
