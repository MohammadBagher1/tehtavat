function FibonacciParittomat() {
    const fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    let summa = 1;

    for (let i = 2; i < 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        if (fibonacci[i] % 2 !== 0) {
            summa += fibonacci[i];
        }
    }

    console.log("Fibonaccin numerot ovat: " + fibonacci);
    console.log("Parittomien Fibonaccin lukujen summa on: " + summa);
}

FibonacciParittomat();
