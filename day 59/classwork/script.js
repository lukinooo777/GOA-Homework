if (avg > 90 && avg < 100) {
    return 'A';
} else if (avg > 70 && avg < 80) {
    return 'B';
} else if (avg > 50 && avg < 65) {
    return 'C';
} else if (avg > 25 && avg < 50) {
    return 'D';
} else if (avg < 25) {
    return 'წადი ისწავლე და მერე მოდი';
} else {
    return 'შეფასება არ არის განსაზღვრული';
}
