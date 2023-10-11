const taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
const luku = 3;

for (let i = 0; i < taulukko.length; i++) {
    if (luku === taulukko[i]) {
        console.log(`Luvun ${luku} ensimm\u00E4inen esiintym\u00E4 on kohdassa ${i}.`);
        break;
    }
}
