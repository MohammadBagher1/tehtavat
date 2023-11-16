function palindromi(sana) {
    const kaannetty = sana.split('').reverse().join('');

    if (sana === kaannetty) {
        console.log(`lause on palindromi`);
    } else {
        console.log(`lause ei ole palindromi`);
    }
}

palindromi("aaroporaa");
palindromi("aaro");
palindromi("saippuakauppias");
palindromi("innostunut");
palindromi("innostunutsonni");
