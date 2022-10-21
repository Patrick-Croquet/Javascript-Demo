let numbers = [1, 3, 6, 8, 11];

// let lucky = numbers.filter(function(number) {
//   return number > 7;
// });

let lucky = numbers.filter((number)=> {
    return number !== 3;
  });

document.write(lucky); // [ 8, 11 ]