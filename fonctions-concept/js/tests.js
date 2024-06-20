"use strict";
let resultat; // variable global*/
let expected;

// série de tests

let nombre1, nombre2;
nombre1 = 8;
nombre2 = 7;
expected = 15;

resultat = somme(nombre1, nombre2);
/*document.write("la somme de 2 et 5 est : " + resultat);*/
document.write("test de la somme de ");
document.write(nombre1);
document.write(" et ");
document.write(nombre2);
document.write(" est ");
document.write(expected);
document.write(" : ");
document.write(resultat === expected);
