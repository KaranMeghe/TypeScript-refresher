const ages: number[] = [1, 2];
console.log(ages);

// Multidimestional array
const gameBoard: string[][] = [
  ["one", "two", "three"],
  ["four", "five", "six"],
];

type Product = {
  name: string;
  price: number;
};

const getTotal = (products: Product[]): number => {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
};
