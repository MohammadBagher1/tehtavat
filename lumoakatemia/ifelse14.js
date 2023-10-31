function koko(a, b) {
    try {
        const lukuA = parseInt(a);
        const lukuB = parseInt(b);

        if (isNaN(lukuA) || isNaN(lukuB)) {
            throw new Error("älä kirjoita kokonaislukuja");
        }

        if (lukuA === lukuB) {
            return "luvut ovat samat.";
        } else {
            return "luvut eivät ole samat.";
        }
    } catch (error) {
        return error.message;
    }
}

console.log(koko(5, 5));
console.log(koko(5, "kymmenen"));
console.log(koko("3", 3));
