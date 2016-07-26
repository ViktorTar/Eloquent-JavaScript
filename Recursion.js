
function isEven(val){
  	if (val < 0) {
      val*=(-1);
    }
  
	if (val === 0) {
      return true;
    } else if (val === 1) {
      return false;
    }
  
    return isEven(val - 2);

}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false