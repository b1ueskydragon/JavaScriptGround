// メモ化した f を返す.
function memoize(f) {
  var cache = {}; // クロージャの中に保存されるキャッシュ

  return function() {
    var key = arguments.length + Array.prototype.join.call(arguments, ",");
    if (key in cache) return cache[key];
    else return cache[key] = f.apply(this, arguments);
  }
}

// キャッシュに存在すればそのまま返し, 存在しない場合は指定した関数を呼び出す.
function euclideanGcd(a, b) {
  var tmp;
  if (a < b) tmp = b, b = a, a = tmp; // a >= b を保証する.
  while (b != 0) tmp = b, b = a % b, a = tmp;
  return a;
}

var gcdmemo = memoize(euclideanGcd);
gcdmemo(85, 187)


// 再起の場合, 元の関数ではなくメモ化した関数を呼び出す.
var factorial = memoize(function(n) {
  return (n <= 1) ? 1 : n * factorial(n - 1);
});

factorial(5);
