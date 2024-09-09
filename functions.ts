const square = (num: number) => {
  return num * num;
};

square(5);
// square(true)
// square("hello")

const doSomething = (name: string, age: number, isAdult: boolean) => {
  return `${name} do something you are ${age} and ${isAdult}`;
};

doSomething("woo", 45, false);

// Default parameter
const greet = (msg: string = "Hello") => {
  console.log(msg);
};

greet("Hey");
greet();

// Return Type Annotations
const multiply = (num: number): number => {
  return num * num;
};
multiply(7);

const random = (num: number) => {
  if (Math.random() < 0.75) {
    return num.toString();
  } else {
    return num;
  }
};

// Annonomus function Contextual typing
const colors = ["Red", "Green", "Blue"];
colors.map((color) => color.toUpperCase());
// colors.map((color) => color.toFixed());

//twoFer()
//twoFer()
let twoFer = (person: string = "you") => {
  return `One for ${person}, and one for me`;
};

const result: string = twoFer("aman");
console.log(result);

const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapYear(2022));
console.log(isLeapYear(2020));
