'use strict';
// OOP in JS: 3 ways of implementing Prototypal Inheritance in JS:

// 1. Constructor function:
console.log('1. Constructor function method:');
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const kiko = new Person('Kiko', 1984);
console.log(kiko);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

kiko.calcAge();

// Class Inheritance => linking prototypes:
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Creating connection between Student and Person classses, before adding methods
// Linking prototypes:
Student.prototype = Object.create(Person.prototype);
// Creating Student method:
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
console.log(mike.__proto__);
console.log(mike.introduce());
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.dir(Student.prototype.constructor);

// // 1.Chalenge OOP
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`The current speed is ${this.speed} km/h of car ${this.make}`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`The current speed is ${this.speed} km/h of car ${this.make}`);
// };

// const bmw = new Car('X4', 220);
// const audi = new Car('Quatro', 190);

// bmw.accelerate();
// bmw.break();
// audi.accelerate();
// audi.accelerate();
// audi.break();
//////////////////

// 2. Class OOP /ES6
console.log('2. Class /ES6/ mehtod:');
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}!`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Not a full name.');
  }

  get fullName() {
    return this._fullName;
  }
}

const koki = new PersonCl('Koki Li', 1982);
koki.calcAge();
koki.greet();

const matew = new PersonCl('Matew Davis', 1988);
console.log(matew);

// // 2. Chalenge OOP
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`The current speed is up ${this.speed} of car ${this.make}`);
//   }

//   break() {
//     this.speed -= 5;
//     console.log(`The current speed is down ${this.speed} of car ${this.make}`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const mercedes = new CarCl('Mercedes', 240);
// console.log(mercedes.speed);
// console.log(mercedes.speedUS);
// mercedes.accelerate();
// mercedes.break();
// mercedes.speedUS = 50;
// console.log(mercedes);

// 3. Object.create() :
console.log('3. Object.create method:');
const PersonObj = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const koko = Object.create(PersonObj);
koko.name = 'Koko';
koko.birthYear = 1980;
koko.calcAge();
console.log(koko);

const kiki = Object.create(PersonObj);
kiki.init('Kiki', 1976);
kiki.calcAge();
console.log(kiki);
