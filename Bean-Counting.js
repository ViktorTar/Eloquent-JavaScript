var count = 0;

function countBs(word) {
  
  for (var i = 0; word.length > i; i++) { 	
  
    if (word[i] === 'B') {
  
      count++;
  
    }  	
  
  }
   return count;
}

function countChar(word, symb){
  
  count = 0;
  
  for (var i = 0; word.length > i; i++) { 	

    if (word[i] === symb) {

      count++;

    }  	
  }
  return count;
} 

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4