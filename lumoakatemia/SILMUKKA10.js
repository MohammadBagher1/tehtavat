console.log('teht\u00E4v\u00E4 10:');
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("viisitoista");
    } else if (i % 5 === 0) {
        console.log("viisi");
    } else if (i % 3 === 0) {
        console.log("kolme");
    } else {
        console.log(`${i}`);
    }
}
console.log('---------------------------------------------')

// en saanu korjatta tämän