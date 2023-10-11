const laina = 5000;
const lainaAika = 2;
const korko = 0.02;
let korkosumma = 0;
let maksettava = 0;
maksettava = laina;
for (let i = 0; i < lainaAika; i++) {
    maksettava += maksettava * korko;
}
korkosumma = maksettava - laina;
maksettava = laina + korkosumma;
console.log("Maksettavaa tulee", maksettava);
