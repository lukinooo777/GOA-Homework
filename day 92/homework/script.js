class Specimen {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }
  getLabel() {
    return `ID: ${this.id}, Type: ${this.type}`;
  }
}

class MutantSpecimen extends Specimen {
  constructor(id, type, mutationLevel) {
    super(id, type);
    this.mutationLevel = mutationLevel;
  }
  getLabel() {
    return `ID: ${this.id}, Type: ${this.type}, Mutation Level: ${this.mutationLevel}`;
  }
  static mostMutated(arr) {
    if (!arr.length) return null;
    return arr.reduce((max, specimen) => specimen.mutationLevel > max.mutationLevel ? specimen : max);
  }
}

const s1 = new MutantSpecimen(1, 'Alien', 5);
const s2 = new MutantSpecimen(2, 'Human', 8);
const s3 = new MutantSpecimen(3, 'Reptile', 3);

console.log(s1.getLabel());
console.log(MutantSpecimen.mostMutated([s1, s2, s3]).getLabel());

class Vehicle {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }
  getInfo() {
    return `Model: ${this.model}, Speed: ${this.speed} km/h`;
  }
}

class ElectricVehicle extends Vehicle {
  constructor(model, speed, batteryLife) {
    super(model, speed);
    this.batteryLife = batteryLife;
  }
  getInfo() {
    return `Model: ${this.model}, Speed: ${this.speed} km/h, Battery Life: ${this.batteryLife} h`;
  }
  static compareSpeed(v1, v2) {
    return v1.speed >= v2.speed ? v1 : v2;
  }
}

const car1 = new ElectricVehicle('Tesla Model 3', 250, 12);
const car2 = new ElectricVehicle('Nissan Leaf', 180, 15);

console.log(car1.getInfo());
console.log(ElectricVehicle.compareSpeed(car1, car2).getInfo());
