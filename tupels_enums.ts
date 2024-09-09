// Creating tuples with its ype defination
let myTuple: [number, string];

// Can assign its values per its specs
myTuple = [10, "Ts is fun"];

// CAN'T assign its value of different structure
// myTuple = ["Ts is Fun", 20];

const color: [number, number, number] = [20, 0, 40];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "Ok"]; // its care about data types, length and its order of types

// ENUM
enum OrderStatus {
  PENDING,
  DELEVERED,
  SHIPPED,
  RETURNED,
}

const myStatus = OrderStatus.DELEVERED;

function isDelevired(status: OrderStatus) {
  return status === OrderStatus.DELEVERED;
}

isDelevired(OrderStatus.RETURNED);
