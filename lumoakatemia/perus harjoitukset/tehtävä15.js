const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

readline.question('Anna luku a: ', (a) => {
    readline.question('Anna luku b: ', (b) => {
        console.log(`a + b = ${parseFloat(a) + parseFloat(b)}`);
        console.log(`a - b = ${parseFloat(a) - parseFloat(b)}`);
        console.log(`a * b = ${parseFloat(a) * parseFloat(b)}`);
        console.log(`a / b = ${parseFloat(a) / parseFloat(b)}`);
        readline.close();
    });
});
