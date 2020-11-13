let drawer = parseInt(prompt("Choisissez le tiroir à ouvrir (1 à 4) :"));
switch (drawer) {
case 1:
 alert("Contient divers outils pour dessiner : du papier, des crayons, etc.");
 break;
case 2:
 alert("Contient du matériel informatique : des câbles, des composants, etc.");
 break;
case 3:
 alert("Ah ? Ce tiroir est fermé à clé ! Dommage !");
 break;
case 4:
 alert("Contient des vêtements : des chemises, des pantalons, etc.");
 break;
default:
 alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu’à preuve du contraire, les tiroirs négatifs n’existent pas.");
}