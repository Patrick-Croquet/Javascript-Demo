//let myArray = []; //tableau vide

let myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
alert(myArray[4]); // affiche Guillaume

myArray.shift(); //Retire Sébastien
alert(myArray);

myArray.pop(); //Retire Guillaume
alert(myArray);

let cousinsString = "Pauline Guillaume Clarisse";
let cousinsArray = cousinsString.split(' ');
alert(cousinsString);
alert(cousinsArray);
cousinsArray.pop();
alert(cousinsArray); //Retire Clarisse

cousinsString = cousinsArray.join(' ');
alert(cousinsString);


let myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

alert(myArray.length); //affiche 5 