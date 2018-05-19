// higher-order function. 関数に対して処理を行う関数.
// 1つ以上の関数を受け取り, 新たな関数を返す.
function not(f) {
  return function() {
    var res = f.apply(this, arguments); // call f
    return !res;
  };
}

var even = function(x) {
  return x % 2 === 0;
}

var odd = not(even);

[1, 3, 5].every(odd);



// implements `map`
var map = Array.prototype.map ? // returns native builtin map func if it is exists.
  function(a, f) { // a is an array, f is a func `increment`.
    return a.map(f);
  } :
  function(a, f) {
    var res = [];
    for(var i = 0, len = a.length; i < len; i++) {
      if (i in a) {
        res[i] = f.call(this, a[i]); // param this should be undefined.
      }
    }
    return res;
  };

function mapper(f) {
  return function(a) {
    return map(a, f);
  };
}

var increment = function(x) {
  return x + 1;
}

var incrementer = mapper(increment);

incrementer([10, 20, 30])
