
    function tarkistaViikonpaiva() {
            var viikonpaivaNumero = parseInt(document.getElementById("viikonpaiva").value);
    var tuloste = "";

    switch (viikonpaivaNumero) {
                case 1:
    tuloste = "Maanantai";
    break;
    case 2:
    tuloste = "Tiistai";
    break;
    case 3:
    tuloste = "Keskiviikko";
    break;
    case 4:
    tuloste = "Torstai";
    break;
    case 5:
    tuloste = "Perjantai";
    break;
    case 6:
    tuloste = "Lauantai";
    break;
    case 7:
    tuloste = "Sunnuntai";
    break;
    default:
    tuloste = "Anna numero v&auml;lilt&auml; 1-7";
            }

    document.getElementById("tuloste").innerHTML = tuloste;
        }

