// Generics
// const nums: number[] = [];
const nums: Array<number> = [];
const color: Array<string> = [];

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

interface DataStorage<T> {
  data: T[];
  add: (data: T) => void;
}

const textStorage: DataStorage<string> = {
  data: [],
  add(data) {},
};

const numberStorage: DataStorage<string> = {
  data: [],
  add: (data) => {},
};

const stringStorage: DataStorage<string> = {
  data: [],
  add(string) {},
};

interface User {
  userId: number | string;
  userName: string;
  email: string;
  contact: number;
}

interface Product {
  productId: number | string;
  productName: string;
  price: number;
}

const user: User = {
  userId: 987998,
  userName: "Ron",
  email: "ronking77@gmail.com",
  contact: 893548728,
};

const product: Product = {
  productId: 7981,
  productName: "Sony Bass Headphones",
  price: 25777,
};

const userProductDetails = <T extends object, U extends object>(
  user: T,
  product: U
) => {
  return {
    ...user,
    ...product,
  };
};
