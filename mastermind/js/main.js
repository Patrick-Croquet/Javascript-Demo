// Définition des variables
let btn = document.getElementById('bouton');
let nbManches;
let couleur;

const NB_COULEURS = 4;
const LONGUEUR_COMBINAISON = 4;
const NB_ESSAIS_MAX = 2;

// Couleurs possibles
const couleurs = [1, 2, 3, 4];

// Fonction pour générer une combinaison secrète aléatoire
function genererCombinaisonSecrete() {
  const combinaisonSecrete = [];
  for (let i = 0; i < LONGUEUR_COMBINAISON; i++) {
    combinaisonSecrete.push(couleurs[Math.floor(Math.random() * couleurs.length)]);
  }
  return combinaisonSecrete;
}

// Fonction pour afficher une combinaison de couleurs
function afficherCombinaison(combinaison) {
  console.log(combinaison.join(' '));
}

// Fonction pour vérifier la proposition du joueur
function verifierProposition(combinaisonSecrete, propositionJoueur) {
  let nbPionsBienPlaces = 0;
  let nbPionsMalPlaces = 0;
  const combinaisonJoueurMarque = Array(LONGUEUR_COMBINAISON).fill(0);
 console.log(combinaisonSecrete);
 console.log(propositionJoueur);
  // Pions bien placés
  for (let i = 0; i < LONGUEUR_COMBINAISON; i++) {
    if (combinaisonSecrete[i] === propositionJoueur[i]) {
      nbPionsBienPlaces++;
      combinaisonJoueurMarque[i] = 1;
    }
  }

  // Pions mal placés
  for (let i = 0; i < LONGUEUR_COMBINAISON; i++) {
    if (combinaisonJoueurMarque[i] === 0) {
      for (let j = 0; j < LONGUEUR_COMBINAISON; j++) {
        if (
          combinaisonSecrete[j] === propositionJoueur[i] &&
          combinaisonJoueurMarque[j] === 0
        ) {
          nbPionsMalPlaces++;
          combinaisonJoueurMarque[j] = 1;
          break;
        }
      }
    }
  }

  return [nbPionsBienPlaces, nbPionsMalPlaces];
}

// Fonction pour jouer une manche
function jouerManche(combinaisonSecrete) {
  let nbEssais = 0;

  console.log(combinaisonSecrete);
  while (
    nbEssais < NB_ESSAIS_MAX 
  ) {
    // Proposition du joueur
    let propositionJoueur = [];
    for (let i = 0; i < LONGUEUR_COMBINAISON; i++) {
      while (true) {
        try {
          const couleur = parseInt(
            prompt(`Saisissez la couleur ${i + 1} (1, 2, 3, 4) : `)
          );
          if (couleur >= 1 && couleur <= NB_COULEURS) {
            break;
          } else {
            console.error('Erreur : Saisie incorrecte. Veuillez saisir une valeur entre 1 et 4.');
          }
        } catch (error) {
          console.error('Erreur : Saisie incorrecte. Veuillez saisir un nombre entier.');
        }
      }
      propositionJoueur.push(couleur);
    }

    // Évaluation de la proposition
    const [nbPionsBienPlaces, nbPionsMalPlaces] = verifierProposition(
      combinaisonSecrete,
      propositionJoueur
    );

    // Affichage du résultat
    console.log(`${nbPionsBienPlaces} pion(s) bien placé(s).`);
    console.log(`${nbPionsMalPlaces} pion(s) de la bonne couleur mais mal placé(s).`);

    nbEssais++;
  }

  if (propositionJoueur.every((couleur, i) => couleur === combinaisonSecrete[i])) {
    console.log('Manche gagnée !');
  } else {
    console.log('Manche perdue !');
    afficherCombinaison(combinaisonSecrete);
  }
}

// Fonction principale du jeu
function jouer() {
  // Nombre de manches
  while (true) {
    try {
      nbManches = parseInt(prompt('Combien de manches souhaitez-vous jouer ? '));
      if (nbManches > 0) {
        break;
      } else {
        console.error('Erreur : Veuillez saisir un nombre de manches positif.');
      } 
    }catch (error) {
        console.error('Erreur : Saisie incorrecte. Veuillez saisir un nombre entier.');
      }
    }
  
    // Boucle principale du jeu
    for (let manche = 1; manche <= nbManches; manche++) {
      console.log(`\nManche ${manche} :`);
      const combinaisonSecrete = genererCombinaisonSecrete();
      jouerManche(combinaisonSecrete);
    }
  }

  
  // Démarrage du jeu
  btn.addEventListener('click', () => {
    jouer();  
},false)
        