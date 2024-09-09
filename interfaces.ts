// An Interface
interface Person {
  readonly id: number;
  name: string;
  age: number;
  nickname?: string;
  sayHi: () => string;
  sayBye?(): string;
}

const sayHappyBirthday = (person: Person): string => {
  return `Hey ${person.name}, congrats turning on ${person.age}`;
};

sayHappyBirthday({
  name: "Rahul",
  age: 28,
  id: 39393,
  sayHi: () => {
    return `Hello`;
  },
});

// Interface Methods parameter
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Sued Shoes",
  price: 100,
  applyDiscount(discount: number) {
    const newPrice = this.price - discount;
    return newPrice;
  },
};

// Extending Interfaces
interface ProductEcom extends Product {
  categories: "Sport" | "Casual" | "Formal" | "Sneakers" | "Running";
}

// Extending Multipule Inheritances
// interface Person {
//   name: string;
// }

// interface Employee {
//   readonly id: number | string;
//   email: string;
// }

// interface Engeineer extends Person, Employee {
//   designation: string;
// }

interface Person1 {
  name: string;
}

interface Employee {
  readonly id: number | string;
  email: string;
}

interface Engineer extends Person1, Employee {
  designation: string;
  languages: string[];
}

const toby: Engineer = {
  name: "Toby",
  id: 993993,
  email: "toby89@gmail.com",
  designation: "Full stack",
  languages: ["C", "C++", "Java", "JS"],
};
