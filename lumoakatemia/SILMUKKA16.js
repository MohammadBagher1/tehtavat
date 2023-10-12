function PoistaPilkutJaTulosta(numerojono) {
    const numerot = numerojono.split(',').map(num => num.trim());
    const tulostettavatNumerot = numerot.filter(numero => !isNaN(numero));
    console.log("Numerot ilman pilkkua ja epäkelvot arvot:");
    console.log(tulostettavatNumerot.join(' '));
}

const syote = '7, 3, 9, abc, 2, 44, 99, 123';
PoistaPilkutJaTulosta(syote);

