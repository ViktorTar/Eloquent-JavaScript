function createChessBoard(size){ 

  var a = '#';

  var arr = [];

  var arr1 = [];

  str = a.repeat(size/2);

  arr1 = str.split('');

  str = arr1.join(' ');

  for (var i = 1; i <= size/2; i++) {

    console.log(str);
    
    console.log(' ' + str);
  
  }

}

createChessBoard(20)