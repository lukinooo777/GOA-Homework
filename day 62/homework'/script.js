function guessPassword() {
  const password = 'Group 41 is best';
  let attempts = 3;

  while (attempts > 0) {
    let input = prompt('შეიყვანეთ პაროლი:');
    
    if (input === password) {
      alert('თქვენი შეყვანილი პაროლი სწორია');
      return;
    } else {
      attempts--;
      if (attempts > 0) {
        alert(`პაროლი არასწორია. დაგრჩათ ${attempts} ცდა`);
      } else {
        alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
      }
    }
  }
}

guessPassword();


function calculateFactorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(`${n} ფაქტორიალია: ${factorial}`);
}

calculateFactorial(5); // შეგიძლია შეცვალო 5 ნებისმიერი რიცხვით
