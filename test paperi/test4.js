function laskeSummaJaKeskiarvo() {
    const luku1 = parseFloat(document.getElementById("luku1").value);
    const luku2 = parseFloat(document.getElementById("luku2").value);
    const luku3 = parseFloat(document.getElementById("luku3").value);
    const luku4 = parseFloat(document.getElementById("luku4").value);
    const luku5 = parseFloat(document.getElementById("luku5").value);

    const summa = luku1 + luku2 + luku3 + luku4 + luku5;
    const keskiarvo = summa / 5;

    document.getElementById("tulokset").innerHTML = "Lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;
}