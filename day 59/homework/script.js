if (score >= 90 && score <= 100) {
    alert("შენ მიღე შეფასება: A");
} else if (score >= 80 && score <= 89) {
    alert("შენ მიღე შეფასება: B");
} else if (score >= 70 && score <= 79) {
    alert("შენ მიღე შეფასება: C");
} else if (score >= 60 && score <= 69) {
    alert("შენ მიღე შეფასება: D");
} else if (score >= 0 && score <= 59) {
    alert("შენ მიღე შეფასება: F");
} else {
    alert("გთხოვ შეიყვანე ქულა 0-დან 100-მდე შუალედში");
}

if (temp < 10) {
    alert("ტემპერატურა ცივია ");
} else if (temp >= 10 && temp <= 25) {
    alert("ტემპერატურა ზომიერია ");
} else if (temp > 25) {
    alert("ტემპერატურა ცხელია ");
} else {
    alert("გთხოვ შეიყვანე სწორი რიცხვი");
}