let eka = 24; 
let toka = 18; 
let temp;

while (toka !== 0) {
    console.log(toka);
    temp = toka;
    toka = eka % toka;
    eka = temp;
}

console.log("Muuttujien suurin yhteinen nimittäjä on " + eka);


   