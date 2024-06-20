// VARIABLES
let dividende;
let diviseur;
let resteDiv;
let continuer = "o";

// DEBUT_ALGORITHME

while (continuer === "o") {
  // DEBUT_TANT_QUE

  console.log("Donner la valeur du dividende");
  dividende = parseInt(window.prompt("Donner la valeur du dividende")); // Lire un nombre entier

  console.log("Donner la valeur du diviseur");
  diviseur = parseInt(window.prompt("Donner la valeur du diviseur")); // Lire un nombre entier

  if (diviseur === 0) {
    // DEBUT_SI
    console.error("Le diviseur ne peut être 0");
    document.writeln("Le diviseur ne peut être 0");
  } else {
    // DEBUT_SINON

    // Initialiser le reste du dividende pour entrer dans la boucle
    resteDiv = 1;

    while (resteDiv !== 0) {
      // DEBUT_TANT_QUE

      resteDiv = dividende % diviseur;

      if (resteDiv !== 0) {
        // DEBUT_SI
        dividende = diviseur;
        diviseur = resteDiv;
      }
      // FIN_SI

    // FIN_TANT_QUE

  }
  // FIN_SINON

  console.log("Voulez-vous continuer ? (o pour Oui)");
  continuer = window.prompt("Voulez-vous continuer ? (o pour Oui)");
}
}
console.log("Le PGCD est :", diviseur);
document.writeln("Le PGCD est :", diviseur);
// FIN_ALGORITHME