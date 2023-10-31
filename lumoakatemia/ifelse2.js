function suurinKolmesta(a, b, c) {
    if (a >= b && a >= c) {
        console.log("Suurin luku on " + a);
    } else if (b >= c) {
        console.log("Suurin luku on " + b);
    } else {
        console.log("Suurin luku on " + c);}
}

suurinKolmesta(1, 1, 2);
suurinKolmesta(1, 4, 2);
suurinKolmesta(1, 1, 3);
suurinKolmesta(2, 3, 6);
suurinKolmesta(4, 1, 2);
suurinKolmesta(3, 3, 3);
