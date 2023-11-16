function kuukaudenpaivat(kknro) {
    kknro = parseInt(kknro);
    switch (kknro) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Kuukausi on 31 p\u00E4iv\u00E4inen");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Kuukausi on 30 p\u00E4iv\u00E4inen");
            break;
        case 2:
            console.log("Kuukaus on 27-28 p\u00E4iv\u00E4inen");
    }
}
kuukaudenpaivat(10);
kuukaudenpaivat(11);
kuukaudenpaivat(2);