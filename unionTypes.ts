let age: number | string = 29;
age = 29;
age = "Twenty Nine";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 2, y: 3 };
coordinates = { lat: 6666, long: 7.99 };

// union types with function
const printAge = (age: number | string): void => {
  console.log(`You are ${age} yrs old`);
};

const calculateTax = (price: number | string, tax: number) => {
  if (typeof price === "string") {
    price.replace("$", "");
  } else {
    price * tax;
  }
};

// union types and arrays
const stuff: (number | string)[] = [123, "one two three", 456];

// literal types
let zero: 0 = 0;

// A function with a literal+union type parameter
const giveAnswer = (answer: "yes" | "no" | "maybe"): string => {
  return `WWE stands for world wresltling entertainment? Ans: ${answer}`;
};
const result = giveAnswer("yes");
console.log(result);

type WeekEndDays = "Friday" | "Saturday" | "Sunday";
let WeekOff: WeekEndDays = "Friday";

type WorkingDay = "Monday" | "Tuesday" | "Wenesdsay" | "Friday";
let workingDay = "Monday";
