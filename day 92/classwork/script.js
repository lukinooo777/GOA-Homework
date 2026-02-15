class SentenceBuilder {
  constructor(word1, word2, word3) {
    this.word1 = word1;
    this.word2 = word2;
    this.word3 = word3;
  }

  buildSentence() {
    return `ეს არის ${this.word1}, ${this.word2} და ${this.word3}`;
  }
}

const sentence = new SentenceBuilder("კომპიუტერი", "ტელეფონი", "პლანშეტი");
console.log(sentence.buildSentence());




class Operative {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }

  getInfo() {
    return `Name: ${this.name}, Rank: ${this.rank}`;
  }

  static compareRanks(op1, op2) {
    if (op1.rank === op2.rank) {
      return `${op1.name} and ${op2.name} have the same rank (${op1.rank}).`;
    }
    return op1.rank > op2.rank
      ? `${op1.name} has a higher rank than ${op2.name}.`
      : `${op2.name} has a higher rank than ${op1.name}.`;
  }
}

class EliteOperative extends Operative {
  constructor(name, rank, specialty) {
    super(name, rank);
    this.specialty = specialty;
  }

  getInfo() {
    return `Name: ${this.name}, Rank: ${this.rank}, Specialty: ${this.specialty}`;
  }
}

const op1 = new Operative("Alex", 5);
const op2 = new EliteOperative("Maya", 7, "Sniper");

console.log(op1.getInfo());
console.log(op2.getInfo());
console.log(Operative.compareRanks(op1, op2));