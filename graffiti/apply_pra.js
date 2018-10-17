/*
 * func.apply(thisArg, [argsArray]) 
 * @return thisArg([argsArray])
 */
let numbers = [10, 4, 99, -1, 1]; // Array or Array-like object.

let max = Math.max.apply(this, numbers);
let min = Math.min.apply(null, numbers); // null be converted to global object.

console.log.apply(this, numbers);
console.log(max);
console.log(min);
