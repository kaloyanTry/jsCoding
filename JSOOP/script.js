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

// // 3. Chalenge OOP:
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed}, with a charge of ${this.charge}`
//   );
// };
// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.accelerate();
// tesla.break();
// console.log(tesla);

//////////////////////
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

  // static method:
  static hey() {
    console.log('Hey there!');
  }
}

const koki = new PersonCl('Koki Li', 1982);
koki.calcAge();
koki.greet();

const matew = new PersonCl('Matew Davis', 1988);
console.log(matew);

// Inheritance Classes:
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }

  // We can overwrite here the method coming from the parent class:
  calcAge() {
    console.log(
      `I'm ${2022 - this.birthYear}, but I fell like I am ${
        2022 - this.birthYear + 10
      } years old.`
    );
  }
}

const martha = new StudentCl('Martha Sanches', 2000, 'Computer Science');
martha.introduce();
martha.calcAge();
console.log(martha);

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

// Object.create Inheritance:
const StudentObj = Object.create(PersonObj);

StudentObj.init = function (firstName, birthYear, course) {
  PersonObj.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentObj.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentObj);
jay.init('Jay', 2010, 'Maths');
jay.introduce();
jay.calcAge();
console.log(jay);

// OOP with JS/Encapsulation: Protected properties and methods:
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // we can create new properties/not default here:
    //this.movements = [];
    // protected propertie:
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}!`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // Protected method:_
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Kaio', 'BGN', 1000);
acc1.deposit(250);
acc1.withdraw(100);
acc1.requestLoan(500);
console.log(acc1);

class AccountProtected {
  // 1) Public fields:
  // locale = navigator.language;
  // _movements = [];
  ////////////////////////////

  // 2) Private fields:
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${this.owner}!`);
  }

  // 3) Public methods with protected property:
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // Protected method:_
  // _approveLoan(val) {
  //   return true;
  // }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }

  // 4. Private methods:
  #approveLoan(val) {
    true;
  }
}

const accProtected = new Account('KaioProtected', 'BGN', 3300);
accProtected.deposit(250);
accProtected.withdraw(100);
accProtected.requestLoan(500);
console.log(accProtected);
