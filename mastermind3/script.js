document.addEventListener('DOMContentLoaded', (event) => {
    // Couleurs disponibles pour le jeu
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFA500', '#800080'];
    
    // Génère une combinaison secrète de 4 couleurs
    const secretCombination = Array.from({ length: 4 }, () => colors[Math.floor(Math.random() * colors.length)]);
    let attemptsLeft = 12;

    // Affiche les choix de couleurs disponibles
    const colorChoicesDiv = document.getElementById('colorChoices');
    colorChoicesDiv.innerHTML = colors.map(color => `<div class="d-inline-block mx-1" style="width: 30px; height: 30px; background-color: ${color};"></div>`).join('');

    // Récupère le formulaire de saisie
    const guessForm = document.getElementById('guessForm');

    // Ajoute un écouteur d'événement pour le formulaire
    guessForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupère les couleurs devinées par l'utilisateur
        const guess = [
            document.getElementById('color1').value,
            document.getElementById('color2').value,
            document.getElementById('color3').value,
            document.getElementById('color4').value
        ];

        // Compare la proposition de l'utilisateur avec la combinaison secrète
        const result = checkGuess(guess, secretCombination);
        attemptsLeft--;

        // Affiche le résultat et les tentatives restantes
        displayResult(guess, result);
        displayAttempts();

        // Vérifie si le joueur a gagné ou perdu
        checkGameOver(result);
    });

    // Fonction pour vérifier la proposition de l'utilisateur
    function checkGuess(guess, secret) {
        let correctPosition = 0;
        let correctColor = 0;
        const secretCopy = [...secret];

        // Vérifie les couleurs correctes à la bonne position
        guess.forEach((color, index) => {
            if (color === secretCopy[index]) {
                correctPosition++;
                secretCopy[index] = null;
            }
        });

        // Vérifie les couleurs correctes mais à la mauvaise position
        guess.forEach((color, index) => {
            if (secretCopy.includes(color)) {
                correctColor++;
                secretCopy[secretCopy.indexOf(color)] = null;
            }
        });

        return { correctPosition, correctColor };
    }

    // Fonction pour afficher le résultat de chaque tentative
    function displayResult(guess, result) {
        const resultDiv = document.getElementById('result');
        const guessDisplay = guess.map(color => `<div class="d-inline-block mx-1" style="width: 30px; height: 30px; background-color: ${color};"></div>`).join('');
        const resultDisplay = `<div>Correct Position: ${result.correctPosition}, Correct Color: ${result.correctColor}</div>`;
        resultDiv.innerHTML += `<div class="mb-3">${guessDisplay} ${resultDisplay}</div>`;
    }

    // Fonction pour afficher les tentatives restantes
    function displayAttempts() {
        const attemptsDiv = document.getElementById('attempts');
        attemptsDiv.innerHTML = `Tentatives restantes : ${attemptsLeft}`;
    }

    // Fonction pour vérifier si le jeu est terminé
    function checkGameOver(result) {
        const resultDiv = document.getElementById('result');
        if (result.correctPosition === 4) {
            resultDiv.innerHTML += `<div class="alert alert-success">Félicitations ! Vous avez trouvé la combinaison secrète.</div>`;
            disableInputs();
        } else if (attemptsLeft <= 0) {
            resultDiv.innerHTML += `<div class="alert alert-danger">Dommage ! Vous avez perdu. La combinaison secrète était ${secretCombination.join(', ')}.</div>`;
            disableInputs();
        }
    }

    // Fonction pour désactiver les entrées
    function disableInputs() {
        document.querySelectorAll('#guessForm input').forEach(input => {
            input.disabled = true;
        });
        document.querySelector('#guessForm button').disabled = true;
    }

    // Initialisation du jeu
    displayAttempts();
});

