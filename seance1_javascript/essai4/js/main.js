// let number = 0;
// //number = number + 1; //incrémention
// number ++;
// alert(number); // affiche 1

// number = number - 1; //décrémention
// number --;
// alert(number); // affiche 0


// let number_1 = 0;
// let number_2 = 0;
// number_1++;
// // number_1 = number_1 + 1;
// ++number_2;
// // 1 + number_2 = number_2;
// alert(number_1); //affiche 1
// alert(number_2); //affiche 1

// let number = 0;
// let output = ++number;
// alert(number); //affiche 1
// alert(output); //affiche 1

// let number = 0;
// let output = number++;
// alert(number); //affiche 1
// alert(output); //affiche 0

// let number = 0; // initialisation
// while(number < 10) { // condition
//     alert(number);
//     number++; //incrémention
// }
// alert(number); // affiche 10
               //les instructions sont exécutées que si la condtion est vraie.

// do {
//     instruction1;
//     instruction2;
//     instruction3;
// } while(condition) // les instructions sont au moins exécutées une fois avant la condition


// for(initialisation; condition; incrémentation) {
//     instruction1;
//     instruction2;
//     instruction3;
// }

// for(let iter = 0; iter < 10 ;iter++) {
//     alert("itération n°" + iter);
// }

// function myfunction(arguments) {
//     //le code que la fonction exécute
// }

// function showMsg() {
//     alert("C'est une première fonction");
// }

// showMsg(); //on exécute le code de la fonction showMsg()

// let msg = "Hello word!";
// function sayHello(){
//     alert(msg);
// }
// sayHello();


// let var1 = 2, var2 = 3; // 2 variables globales
// function calculate(){
//     alert(var1 * var2); // affiche 6
// }

// calculate();
// alert(var1); // affiche 2
// var1 = 3;
// calculate();
// alert(var1); // affiche 3

// function calculate() {
//     let var1 = 2, var2 = 3; //variables locales
//     alert(var1 * var2);
// }

// calculate();
// alert(var1); // affiche null


// function myfunction(arg) {
//     //le code que la fonction exécute
//     alert("L'argument est :" + arg) // Affiche L'argument est : C'est bien un argument
// }
// myfunction("C'est bien un argument");


// function calculate2(var1, var2) {
//     alert(var1 * var2); // affiche 6
// }

// let number_1a, number_2a;
// number_1a = parseInt(prompt("Votre premier nombre : "));
// number_2a = parseInt(prompt("Votre deuxième nombre : "));
// calculate2(number_1a,number_2a);

class Calcul {
    constructor(var1, var2) {
      this.produit = var1 * var2;
    }
  }
  
  console.log(new Calcul(4, 3).produit);
  alert(new Calcul(4, 3).produit);
  //expected output: 12

// let msg2 = "Hello word!";
// function sayHello2(){
//     alert(msg2);
// }
// sayHello2();

// let sayHello3 = (function(){   //fonction anonyme
//                 return "Hello word!";
//                 })();
// alert(sayHello3); // affiche Hello word! 

let calcul1 = (function(){   //fonction anonyme
                let var1 = 2, var2 = 3;
                return var1*var2;
            })();
alert(calcul1);  
          