
/*
 * Swaping array elements by index.
 *
 * @param {object} ary - Array
 * @param {number} i   - index 1
 * @param {number} j   - index 2
 */
var swap = (ary, i, j) => {
 var tmp;
 tmp = ary[i];
 ary[i] = ary[j];
 ary[j] = tmp;
}

/*
 * Sorting.
 *
 * @param {object} ary   - Array
 * @param {number} left  - first index of Array
 * @param {number} right - last index of Array
 * @return {object}      - Array (Sorted)
 */
var quickSort = (ary, left, right) => {
 var centerValue = ary[Math.floor((left + right) /2)];
 var cursorLeft = left;
 var cursorRight = right;

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
 }
 
 if (left < cursorRight) {
  quickSort(ary, left, cursorRight);
 }
 if (cursorLeft < right) {
  quickSort(ary, cursorLeft, right);
 }

 return ary;
}

// sample
ary = [19, 4, 2, 66, 9, 0, 1, -2];
console.log(quickSort(ary, 0, ary.length - 1));


