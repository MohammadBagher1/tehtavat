function kirjain(merki) {
    if (merki.match(/[a-�A-�]/i) && merki == merki.toUpperCase()) {
        console.log("se on iso kirjain");
    }
    else if (merki.match(/[a-�A-�]/i) && merki == merki.toLowerCase()) {
        console.log("se on pini kirjain");
    }
    else {
        console.log("se ei ole kirjain");}
}
kirjain("a");
kirjain("B");
kirjain("!");