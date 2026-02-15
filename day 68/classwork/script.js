const academy = {
  name: "CodeMaster Academy",
  courses: ["JavaScript", "Python", "React"],
  socialLink: "https://www.codemaster.ge",
  reviews: {
    user1: {
      name: "Nino",
      status: "parent",
      review: "Its good because my son osnt playing anumore game."
    },
    user2: {
      name: "Luka",
      status: "child",
      review: "I loved the JavaScript course!"
    },
    user3: {
      name: "Mariam",
      status: "parent",
      review: "My son is best At GOA academy"
    }
  }
};

console.log(Object.entries(academy));
console.log(Object.keys(academy));
console.log(Object.values(academy));
console.log(academy.hasproperty("Courses"));


const newObject = {
  member: 120
};

const mergedAcademy = Object.assign({}, academy, newObject);
console.log(mergedAcademy);

Object.freeze(academy);


if (Object.isFrozen(academy)) {
  console.log("ობიექტი გაყინულია");
} else {
  console.log("ობიექტი არ არის გაყინული");
}
