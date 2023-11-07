// JavaScript for your HTML code

// Tehtävä 1
function tulostaParilliset() {
    var input = document.getElementById('inputTehtava1').value;
    var tuloste = document.getElementById('tulosteTehtava1');
    tuloste.innerHTML = '';

    if (input % 2 === 0 && input !== 0) {
        for (var i = 2; i <= input; i += 2) {
            tuloste.innerHTML += i + ' ';
        }
    } else {
        tuloste.innerHTML = 'Syötä parillinen luku, pois lukien 0.';
    }
}

// Tehtävä 2
function muunnaSalasanaksi() {
    var input = document.getElementById('inputTehtava2').value;
    var tuloste = document.getElementById('tulosteTehtava2');
    tuloste.innerHTML = '';

    var salasana = '';
    for (var i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            salasana += input[i];
        } else {
            salasana += 'Ö';
        }
    }

    tuloste.innerHTML = 'Salasana: ' + salasana;
}

// Tehtävä 3
function tarkistaKirjain() {
    var input = document.getElementById('inputTehtava3').value;
    var tuloste = document.getElementById('tulosteTehtava3');
    tuloste.innerHTML = '';

    if (input.includes('ö') || input.includes('Ö')) {
        tuloste.innerHTML = 'Sanassa on ö-kirjain.';
    } else {
        tuloste.innerHTML = 'Sanassa ei ole ö-kirjainta.';
    }
}

// Tehtävä 4
function laskeKertoma() {
    var input = document.getElementById('inputTehtava4').value;
    var tuloste = document.getElementById('tulosteTehtava4');
    tuloste.innerHTML = '';

    var luku = parseInt(input);
    if (!isNaN(luku) && luku >= 0) {
        var kertoma = 1;
        for (var i = 1; i <= luku; i++) {
            kertoma *= i;
        }
        tuloste.innerHTML = luku + '! = ' + kertoma;
    } else {
        tuloste.innerHTML = 'Syötä positiivinen luku.';
    }
}

// Tehtävä 5
function tulostaNumerotMerkkijonoilla() {
    var tuloste = document.getElementById('tulosteTehtava5');
    tuloste.innerHTML = '';

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            tuloste.innerHTML += 'FizzBuzz ';
        } else if (i % 3 === 0) {
            tuloste.innerHTML += 'Fizz ';
        } else if (i % 5 === 0) {
            tuloste.innerHTML += 'Buzz ';
        } else {
            tuloste.innerHTML += i + ' ';
        }
    }
}
// Tehtävä 6
function tulostaEnsimmaisetKymmenenNumerot() {
    var tuloste = document.getElementById('tulosteTehtava6');
    tuloste.innerHTML = '';

    for (var i = 1; i <= 10; i++) {
        tuloste.innerHTML += i + ' ';
    }
}

// Tehtävä 7
function laskeYhteenEnsimmaisetKymmenenNumerot() {
    var tuloste = document.getElementById('tulosteTehtava7');
    tuloste.innerHTML = '';

    var summa = 0;
    for (var i = 1; i <= 10; i++) {
        summa += i;
    }

    tuloste.innerHTML = 'Summa: ' + summa;
}

// Tehtävä 8
function laskePotenssi() {
    var inputA = document.getElementById('inputTehtava8a').value;
    var inputB = document.getElementById('inputTehtava8b').value;
    var tuloste = document.getElementById('tulosteTehtava8');
    tuloste.innerHTML = '';

    var lukuA = parseInt(inputA);
    var lukuB = parseInt(inputB);

    if (!isNaN(lukuA) && !isNaN(lukuB)) {
        var potenssi = Math.pow(lukuA, lukuB);
        tuloste.innerHTML = lukuA + '^' + lukuB + ' = ' + potenssi;
    } else {
        tuloste.innerHTML = 'Syötä kelvolliset luvut.';
    }
}

// Tehtävä 9
function etsiSuurinPienin() {
    var inputA = document.getElementById('inputTehtava9a').value;
    var inputB = document.getElementById('inputTehtava9b').value;
    var inputC = document.getElementById('inputTehtava9c').value;
    var inputD = document.getElementById('inputTehtava9d').value;
    var inputE = document.getElementById('inputTehtava9e').value;
    var tuloste = document.getElementById('tulosteTehtava9');
    tuloste.innerHTML = '';

    var lukuA = parseInt(inputA);
    var lukuB = parseInt(inputB);
    var lukuC = parseInt(inputC);
    var lukuD = parseInt(inputD);
    var lukuE = parseInt(inputE);

    if (!isNaN(lukuA) && !isNaN(lukuB) && !isNaN(lukuC) && !isNaN(lukuD) && !isNaN(lukuE)) {
        var suurin = Math.max(lukuA, lukuB, lukuC, lukuD, lukuE);
        var pienin = Math.min(lukuA, lukuB, lukuC, lukuD, lukuE);

        tuloste.innerHTML = 'Suurin luku: ' + suurin + '<br>Pienin luku: ' + pienin;
    } else {
        tuloste.innerHTML = 'Syötä kelvolliset luvut.';
    }
}

// Tehtävä 10
function muokkaaSalasana() {
    var input = document.getElementById('inputTehtava10').value;
    var tuloste = document.getElementById('tulosteTehtava10');
    tuloste.innerHTML = '';

    var muokattuSalasana = '';
    for (var i = 0; i < input.length; i++) {
        if (input[i] === 'a' || input[i] === 'A') {
            muokattuSalasana += 'X';
        } else if (input[i] === 'b' || input[i] === 'B') {
            muokattuSalasana += 'Y';
        } else {
            muokattuSalasana += input[i];
        }
    }

    tuloste.innerHTML = 'Muokattu salasana: ' + muokattuSalasana;
}

// Tehtävä 11
function naytaParillisetJaParittomat() {
    var inputA = document.getElementById('inputTehtava11a').value;
    var inputB = document.getElementById('inputTehtava11b').value;
    var tuloste = document.getElementById('tulosteTehtava11');
    tuloste.innerHTML = '';

    var lukuA = parseInt(inputA);
    var lukuB = parseInt(inputB);

    if (!isNaN(lukuA) && !isNaN(lukuB) && lukuA < lukuB) {
        var parilliset = '';
        var parittomat = '';
        var parillistenSumma = 0;
        var parittomienSumma = 0;

        for (var i = lukuA; i <= lukuB; i++) {
            if (i % 2 === 0) {
                parilliset += i + ' ';
                parillistenSumma += i;
            } else {
                parittomat += i + ' ';
                parittomienSumma += i;
            }
        }

        tuloste.innerHTML = 'Parilliset: ' + parilliset + '<br>Summa: ' + parillistenSumma + '<br><br>';
        tuloste.innerHTML += 'Parittomat: ' + parittomat + '<br>Summa: ' + parittomienSumma;
    } else {
        tuloste.innerHTML = 'Syötä kelvolliset luvut, jossa toinen luku on suurempi kuin ensimmäinen.';
    }
}

document.getElementById('nappiTehtava6').addEventListener('click', tulostaEnsimmaisetKymmenenNumerot);
document.getElementById('nappiTehtava7').addEventListener('click', laskeYhteenEnsimmaisetKymmenenNumerot);
document.getElementById('nappiTehtava8').addEventListener('click', laskePotenssi);
document.getElementById('nappiTehtava9').addEventListener('click', etsiSuurinPienin);
document.getElementById('nappiTehtava10').addEventListener('click', muokkaaSalasana);
document.getElementById('nappiTehtava11').addEventListener('click', naytaParillisetJaParittomat);
document.getElementById('nappiTehtava1').addEventListener('click', tulostaParilliset);
document.getElementById('nappiTehtava2').addEventListener('click', muunnaSalasanaksi);
document.getElementById('nappiTehtava3').addEventListener('click', tarkistaKirjain);
document.getElementById('nappiTehtava4').addEventListener('click', laskeKertoma);
document.getElementById('nappiTehtava5').addEventListener('click', tulostaNumerotMerkkijonoilla);

