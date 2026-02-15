let university = {
  name: "Tbilisi State University",
  departments: 10,
  website: "https://www.tsu.ge",
  ratings: {
    student1: 4.5,
    student2: 4.2,
    student3: 4.8
  }
};


console.log(Object.entries(university));

console.log("scholarship" in university)

// 3. დაამატეთ studentsCount ობიექტის გაე
university = {
  ...university,
  studentsCount: 20000
};
console.log(university);

// 4. გაყინეთ ობიექტი და სცადეთ შეცვლა
Object.freeze(university);
university.name = "Changed University";
console.log(university.name); // არ შეიცვლება

console.log(Object.isFrozen(university)); // true





let sportsClub = {
  clubName: "Dinamo Tbilisi",
  sportType: "Football",
  foundedYear: 1925,
  achievements: {
    title1: "UEFA Cup",
    title2: "National League",
    title3: "Super Cup"
  }
};


console.log(Object.keys(sportsClub));


console.log(Object.values(sportsClub))
console.log("sponsors" in sportsClub); 


sportsClub = {
  ...sportsClub,
  stadiumCapacity: 55000
};
console.log(sportsClub);


Object.freeze(sportsClub);
sportsClub.clubName = "Changed Name";
console.log(sportsClub.clubName); 


console.log(Object.isFrozen(sportsClub)); 
