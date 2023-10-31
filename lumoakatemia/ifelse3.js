function tarkistaMerkki(luku) {
    if (luku < 0) {
        console.log("Luku on negatiivinen");
    } else if (luku === 0) {
        console.log("Luku on nolla");
    } else {
        console.log("Luku on positiivinen");
    }
}

tarkistaMerkki(-1);
tarkistaMerkki(0);
tarkistaMerkki(1);
