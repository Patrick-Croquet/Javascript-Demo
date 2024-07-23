// Définition des variables
const NB_COULEURS = 4;
const LONGUEUR_COMBINAISON = 4;
const NB_ESSAIS_MAX = 10;

// Couleurs possibles
const couleurs = [1, 2, 3, 4];

function genererCombinaisonSecrete() {
  // Génère une combinaison secrète aléatoire
  const combinaisonSecrete = [];
  for (let i = 0; i < LONGUEUR_COMBINAISON; i++) {
    combinaisonSecrete.push(Math.floor(Math.random() * NB_COULEURS) + 1);
  }
  return combinaisonSecrete;
}

function afficherCombinaisonSecrete(combinaison) {
  // Affiche une combinaison de couleurs
  console.log(combinaison.join(" "));
}

function verifierProposition(combinaisonSecrete, propositionJoueur) {
  // Vérifie la proposition du joueur et retourne le nombre de pions bien placés et mal placés
  let nbPionsBienPlaces = 0;
  let nbPionsMalPlaces = 0;
  const combinaisonJoueurMarque = new Array(LONGUEUR_COMBINAISON).fill(0);

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
        if (combinaisonSecrete[j] === propositionJoueur[i] && combinaisonJoueurMarque[j] === 0) {
          nbPionsMalPlaces++;
          combinaisonJoueurMarque[j] = 1;
          break;
        }
      }
    }
  }

  return [nbPionsBienPlaces, nbPionsMalPlaces];
}

async function attendreValidationCombinaison(propositionJoueur, combinaisonSecrete) {
  const button = document.querySelector("#valider");
  await button.addEventListener('click', function() { // Attendre le clic du bouton
    console.log('Vous avez validé votre combinaison !');
    // ... Vos instructions ici
    for (let i = 0; i < LONGUEUR_COMBINAISON; i++) {
      let couleur;
      while (true) {
        //couleur = parseInt(prompt(`Saisissez la couleur ${i + 1} (1, 2, 3, 4) : `));
        couleur = parseInt(document.getElementById(`couleur${i + 1}`).value);
        if (couleur >= 1 && couleur <= NB_COULEURS) {
          break;
        } else {
          console.log("Erreur : Saisie incorrecte. Veuillez saisir une valeur entre 1 et 4.");
        }
      }
      propositionJoueur.push(couleur);
    }

    console.log(`${propositionJoueur}`);
    // Évaluation de la proposition
    const [nbPionsBienPlaces, nbPionsMalPlaces] = verifierProposition(combinaisonSecrete, propositionJoueur);

    // Affichage du résultat
    console.log(`${nbPionsBienPlaces} pion(s) bien placé(s).`);
    document.getElementById('nbPionsBienPlaces').innerText = `${nbPionsBienPlaces} pion(s) bien placé(s).`;
    console.log(`${nbPionsMalPlaces} pion(s) de la bonne couleur mais mal placé(s).`);
    document.getElementById('nbPionsMalPlaces').innerText = `${nbPionsMalPlaces} pion(s) de la bonne couleur mais mal placé(s).`;

  });
}

function jouerManche(combinaisonSecrete) {
  // Joue une manche du jeu
  let nbEssais = 0;
  
  while (nbEssais < 1 && !arraysEqual(propositionJoueur, combinaisonSecrete)) {
    // Proposition du joueur
    let propositionJoueur = [];
  
    attendreValidationCombinaison(propositionJoueur, combinaisonSecrete); // Déclencher la fonction asynchrone
        
    nbEssais++;
    }

    if (arraysEqual(propositionJoueur, combinaisonSecrete)) {
      console.log("Manche gagnée !");
    } else {
      console.log("Manche perdue !");
      afficherCombinaisonSecrete(combinaisonSecrete);
    }
    
  }

 

function jouer() {
  // Fonction principale du jeu
  // Nombre de manches
  let nbManches = document.getElementById('manches').value;
  while (true) {
    //nbManches = parseInt(prompt("Combien de manches souhaitez-vous jouer ? "));
    if (nbManches > 0) {
      break;
    } else {
      console.log("Erreur : Veuillez saisir un nombre de manches positif.");
    }
  }

  // Boucle principale du jeu
  for (let manche = 1; manche <= nbManches; manche++) {
    console.log(`\nManche ${manche} :`);
    const combinaisonSecrete = genererCombinaisonSecrete();
    jouerManche(combinaisonSecrete);
  }
}

function arraysEqual(arr1, arr2) {
  // Vérifie si deux tableaux sont égaux
  if (arr1 === null || arr2 === null) return false;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}