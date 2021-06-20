"use strict";
// console.log(this);

//CALLING THE THIS KEYWORD IN A REGULAR FUNCTION RESULTS TO UNDEFINED
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

//USING THE THIS KEYWORD IN AN ARRROW FUNCTION YIELDS ACCESS AS THOUGH IT IS IN THE PARENT SCOPE
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

//USING IT IN AN OBJECT WORKS AS EXPECTED
var firstName = "Matilda";

const jonas = {
  firstName: "jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year); // Not an Object as expected

    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();

jonas.calcAge();

const matilda = {
  year: 2017,
};

//METHOD BORROWING
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

// PIT FALLS OF THE THIS KEYWORD WITH REGULAR FUNCTIONS AND ARROW FUNCTIONS

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "jonas",
  age: 30,
};
const friend = me;

// PRIMITIVE VS OBJECTS IN PRACTICE

let lastName = "williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "jessica",
  lastName: "william",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// COPY OBJECTS
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("john");

console.log("Before marriage:", jessica2);
console.log("After  marriage:", jessicaCopy);

//You need to make a deep clone to be able to create objects that you can modify on the second level
