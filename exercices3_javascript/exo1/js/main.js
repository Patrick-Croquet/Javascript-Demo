function reverse_a_number(number) {
    number = number + "";
    return number.split("").reverse().join("");
;}

document.write(reverse_a_number(2016));
ou
alert(reverse_a_number("2016"));
console.log

// let nbr,nbrFinal="",length;
//         nbr=prompt("Entré un nombre: ");
//         length=nbr.length-1;
//         for(i=1;i<=nbr.length;i++){
//             nbrFinal+=nbr.charAt(length);
//             length=length-1;
//         }
//         document.write(nbrFinal);


// function reversedString(stringToReverse) {
//     var string2Array = stringToReverse.split('');
//     var gnirts2Array = string2Array.reverse();
//     var reversedString = gnirts2Array.join("");
//     return reversedString; 
// }
// alert(reversedString("2016"));
// alert(reversedString("2019"));