const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('anna säde: ', (sade) => {
    const area = Math.PI * sade * sade;
    console.log(`se on : ${area}`);
    rl.close();
});
