let drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));

switch (drawer) {
    case 1:
        alert("contient divers outils pour dessiner : du papier, des crayons, etc");
        break;
    case 2:
        alert("contient du matériel informatique");
        break;
    case 3:
        alert("ah ? Ce tiroir est fermé à clé !");
        break;
    case 4:
        alert("Contient des vêtement");
        break;
    default:
        alert("le meuble ne contients que 4 tiroirs");                 
}