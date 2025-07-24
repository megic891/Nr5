// 1-masala
const p1 = new Promise(resolve => setTimeout(() => resolve("P1"), 300))
const p2 = new Promise(resolve => setTimeout(() => resolve("P2"), 200));
const p3 = new Promise(resolve => setTimeout(() => resolve("P3"), 500));
Promise.race([p1, p2, p3]).then(result => console.log("1:", result));

// 2-masala
class Animal {
  constructor(name) {
    if (new.target === Animal) throw new Error("Abstract");
    this.name = name;
  }
  speak() {
    throw new Error("speak() kerak");
  }

}
class Dog extends Animal {
  speak() { console.log("2:", `${this.name} vov-vov`); }

}
class Cat extends Animal {
  speak() { console.log("2:", `${this.name} miyov`); }

}
class Bird extends Animal {
  speak() { console.log("2:", `${this.name} chirqir`); }
}

new Dog("Rex").speak();
new Cat("Mushuk").speak();
new Bird("Chumchuq").speak();

// 3-masala
class MathTools {
  static add(a, b) { return a + b; }
  static mul(a, b) { return a * b; }
  static div(a, b) { return b !== 0 ? a / b : "Xato"; }
}

console.log("3:", MathTools.add(5, 6));
console.log("3:", MathTools.mul(3, 4));
console.log("3:", MathTools.div(10, 2));

// 4-masala
class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  getAge() { return this.#age; }
  setAge(a) { if (a > 0) this.#age = a; }
}

const p = new Person("Ali", 25);
console.log("4:", p.getAge());
p.setAge(30);
console.log("4:", p.getAge());