'use strict';

var msg = "Happy New Year";
var toCharArrow = () => {
  for (var i = 0; i < msg.length ; i ++) {
  	console.log(msg[i].charCodeAt());
  }
}

var codes = [72, 97, 112, 112, 121, 32, 110, 101, 119, 32, 121, 101, 97, 114];

var printCodes = function() {
 for(var i = 0; i < codes.length ; i ++) {
   console.log(String.fromCharCode(codes[i]));
 }
}

printCodes();


var printCodesArrow = () => {
  for(var i = 0; i < codes.length ; i ++) {
    console.log(String.fromCharCode(codes[i]));
  }
}

printCodesArrow.call();