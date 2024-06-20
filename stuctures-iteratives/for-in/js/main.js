/*for (propriete in objet) {
  // Instructions à exécuter pour chaque propriété
}*/

// Parcourir un objet `personne` et afficher ses propriétés et valeurs
const personne = { nom: "Pierre", age: 30, ville: "Paris" };

for (const propriete in personne) {
  console.log(propriete, ":", personne[propriete]);
}
