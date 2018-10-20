const lst = [1, 2, 3, 4];
const acc = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(lst.reduce(acc));

// anonymous function
console.log(lst.reduce(function (a, c) {
  return a + c;
}));

// 5 + 1 + 2 + 3 + 4
console.log(lst.reduce(acc, 5));

