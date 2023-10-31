function paiva(num) {
    num = parseInt(num);
    console.log(num);
    switch (num) {
        case 1:
            console.log("Maanantai");
            break;
        case 2:
            console.log("Tiistai");
            break;
        case 3:
            console.log("Keskiviikko");
            break;
        case 4:
            console.log("Torstai");
            break;
        case 5:
            console.log("Perjantai");
            break;
        case 6:
            console.log("Lauantai");
            break;
        case 7:
            console.log("Sunnuntai");
            break;
        default:
            console.log("numero ei ole viikonpäivä anna numeron 1-7");
            break;
    }
}
paiva(0);
paiva(1);
paiva(2);