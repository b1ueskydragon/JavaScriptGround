// Roop logic is weird but result is green (at this time).
// need to verificate.

var swap = (ary, i, j) => {
 var tmp;
 tmp = ary[i];
 ary[i] = ary[j];
 ary[j] = tmp;
}

var quickSort = (ary, left, right) => {
 var centerValue = ary[Math.floor((left + right) /2)];
 var cursorLeft = left;
 var cursorRight = right;
 
 // little bit weird one
 while(true) {
  while (ary[cursorLeft] < centerValue) {
    cursorLeft++;
  }
  while (centerValue < ary[cursorRight]) {
    cursorRight--;
  }
  if (cursorLeft <= cursorRight) {
    swap(ary, cursorLeft++, cursorRight--);
  }

  if (cursorLeft > cursorRight) {
    break;
  }

  quickSort(ary, left, cursorRight);
  quickSort(ary, cursorLeft, right);
 }

 return ary;
}

ary = [19, 4, 2, 66, 9, 0, 1, -2];
console.log(quickSort(ary, 0, ary.length - 1));
