function tarkasta() {
    var etunimi = document.getElementById('etunimi').value;
    var sukunimi = document.getElementById('sukunimi').value;
    var kulkutapa = document.querySelector('input[name="kulkutapa"]:checked');
    var lempitunti = document.getElementById('lempitunti');

    if (etunimi.length < 1) {
        alert("Kirjoita etunimi, kiitos!");
    } else if (sukunimi.length < 1) {
        alert("Kirjoita sukunimi, kiitos!");
    } else if (!kulkutapa) {
        alert("Ole hyv\u00E4 ja valitse, mill\u00E4 tulit kouluun, kiitos!");
    } else if (lempitunti.value.length < 1) {
        alert("Ole hyv\u00E4 ja valitse lempituntisi koulussa, kiitos!")
    } else {
        alert("Kiitos tietojen t\u00E4ytt\u00E4misest\u00E4!");
        document.getElementById('v2').innerHTML = "Annoit seuraavat tiedot: <br>" + etunimi + " " + sukunimi + "<br />" + "Tulit t\u00E4n\u00E4\u00E4n kouluun " + kulkutapa.value + "<br /> Ja pid\u00E4t seuraavasta tunnista: " + lempitunti.value;
    }
}
