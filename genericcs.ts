// Generics
// const nums: number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [];

// Generic function()
const numberIdentity = (item: number): number => {
  return item;
};

const stringIdentity = (item: string): string => {
  return item;
};

const booleanIdentity = (item: boolean): boolean => {
  return item;
};

interface Car {
  name: string;
  price: number;
  cng: boolean;
}

// Generic function()
const identity = <Type>(item: Type): Type => {
  return item;
};
identity<string>("Hello");
identity<number>(8);
identity<boolean>(true);
identity<Car>({ name: "ford", price: 77999, cng: true });

const premetiveTypes = <Type>(type: Type): Type => {
  return type;
};
premetiveTypes<string>("String");
premetiveTypes<number>(10);
premetiveTypes<boolean>(true);

const getRandomPrints = <T>(list: T[]): T[] => {
  return list.map((item) => item);
};

getRandomPrints<string>(["snow", "butter", "river"]);

// Generic with multipule types

const merger = <T extends object, U extends object>(obj1: T, obj2: U) => {
  return {
    ...obj1,
    ...obj2,
  };
};

merger({ name: "Suhansh", id: 78979789 }, { age: 27, adult: true });
