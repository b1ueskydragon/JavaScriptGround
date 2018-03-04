// callback function
function callback(s) {
  console.log(s + " ワハハ");
}

function func(s, cf) {
  cf(s); // invoke a callback function
}

// execute
func("LaughLike", callback);


