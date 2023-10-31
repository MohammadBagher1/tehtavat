function vokaaliKonsonantti(merkki) {
    if (merkki.match(/[aeiouyäö]/i)) {
        console.log("merkki on vokaali");
    }
    else if (merkki.match(/[bcdfghjklmnpqrstvwxz]/i)) {
        console.log("merkki on konsonantti");
    }
    else {
        console.log("Annettu merkki ei ole kumpikaan");}
}
vokaaliKonsonantti("A");
vokaaliKonsonantti("B");
vokaaliKonsonantti("?");