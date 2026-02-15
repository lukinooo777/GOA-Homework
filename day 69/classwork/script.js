const allValue = [
  25,                          
  "Hello",                   
  3.14,                       
  true,                      
  {
    name: "Luks",
    surname: "Khurtsidze",
    age: 30,
    country: "Georgia",
    city: "Qutaisi"
  }                           
];

const personalInfo = allValue[4];  

const sentence = "My name is ${personalInfo.name}, My surname is ${personalInfo.surname}, l am ${personalInfo.age} age, l live ${personalInfo.country} , city ${personalInfo.city}"