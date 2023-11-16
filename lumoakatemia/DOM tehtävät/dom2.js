
    const etunimiKentta = document.getElementById("etunimi");
    const sukunimiKentta = document.getElementById("sukunimi");
    const tulostaNimiNappi = document.getElementById("tulostaNimi");

    tulostaNimiNappi.addEventListener("click", function () {
            const etunimi = etunimiKentta.value;
    const sukunimi = sukunimiKentta.value;
    console.log("Etunimi: " + etunimi);
    console.log("Sukunimi: " + sukunimi);
    });
