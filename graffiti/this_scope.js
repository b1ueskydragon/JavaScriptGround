/*
 * `let` is limited scope.
 * This is unlike the `var` keyword, which defines a variable globally,
 * or locally to an entire function regardless of block scope.
 */
 
var eel = "global-ema"; // a global eel

function printName() {
  console.log(this.eel);
};

let printNameArrow = () => {
  console.log(this.eel);
};

let flush = {
  eel: "local-ema",
  print: printName,
  printArrow: printNameArrow
}

flush.print(); // local-ema
flush.printArrow(); // global-ema

