
function cons(a,b) {
  return function(pair) {
    return pair(a, b);
  };
};

function car(pair) {
  return pair(function(a, b){
    return a;
  });
};

function cdr(pair) {
  return pair(function(a, b) {
    return b;
  });
};


var cons = (a, b) => {
  return (pair) => pair(a, b)
};

var car = (pair) => {
  return pair((a, b) => a);
};

var cdr = (pair) => {
  return pair((a, b) => b);
};


// get 'a'
console.log(
  car(cdr(cons(cons(99, 100), cons('a', 'b'))))
);

