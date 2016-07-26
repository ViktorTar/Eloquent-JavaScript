function min(val1, val2){
	if (val1 > val2) {
      return val2;
    } else {
      return val1;
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10