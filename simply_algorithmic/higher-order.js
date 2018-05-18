// higher-order function. 関数に対して処理を行う関数.
// 1つ以上の関数を受け取り, 新たな関数を返す.
function not(f) {
  return function() {
    var res = f.apply(this, arguments); // call f
    return !res
  }
}

var even = function(x) {
  return x % 2 === 0;
}

var odd = not(even);

[1, 3, 5].every(odd);
