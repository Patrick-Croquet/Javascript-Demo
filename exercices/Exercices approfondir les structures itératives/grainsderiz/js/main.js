// VARIABLES
let nbGrains = 1;
let i;

// DEBUT_ALGORITHME

for (i = 1; i <= 63; i++) {
  nbGrains *= 2; // Doubler le nombre de grains à chaque itération
  document.write("Nombre de grains : ", nbGrains);
  document.write("<br />");
}

console.log("Nombre de grains : ", nbGrains);

document.write("<br />");
console.log("Que vous pouvez aussi exprimer ainsi : ", Math.pow(2, 63)); // Afficher 2^63
document.write("Que vous pouvez aussi exprimer ainsi : ", Math.pow(2, 63)); // Afficher 2^63
// FIN_ALGORITHME