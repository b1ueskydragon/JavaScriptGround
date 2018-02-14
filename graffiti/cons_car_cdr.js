
function cons(a,b) {
  return function(pair) {
    return pair(a, b);
  };
}

function car(pair) {
  return pair(function(a, b){
    return a;
  });
}

function cdr(pair) {
  return pair(function(a, b) {
    return b;
  });
}

cons(1, cons(2, 3));
