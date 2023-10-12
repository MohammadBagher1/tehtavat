function poistaPilkkuja(numerojono) {
    // Erotetaan numerojono pilkulla ja muunnetaan taulukoksi
    var numerot = numerojono.split(',');

    // Luodaan uusi taulukko ilman pilkkuja
    var tulostettavatNumerot = [];
    for (var i = 0; i < numerot.length; i++) {
        var numero = numerot[i].trim(); // Poistetaan mahdolliset välilyönnit
        if (!isNaN(numero)) { // Tarkistetaan, että se on numero
            tulostettavatNumerot.push(numero);
        }
    }

    // Tulostetaan numerot ilman pilkkua
    console.log(tulostettavatNumerot.join(' '));
}

// Käyttöesimerkki
var syote = '7,3,9,2,44,99,123';
poistaPilkkuja(syote);    