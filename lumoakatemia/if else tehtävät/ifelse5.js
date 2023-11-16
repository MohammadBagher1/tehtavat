function onkoKarkausvuosi(vuosi) {
    if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
        console.log("Vuosi on karkausvuosi");
    } else {
        console.log("Vuosi ei ole karkausvuosi");
    }
}

onkoKarkausvuosi(2004);
onkoKarkausvuosi(1111);
onkoKarkausvuosi(2019);

