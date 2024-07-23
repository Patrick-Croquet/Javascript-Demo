// Liste des couleurs possibles avec les nouvelles couleurs
const colors = ["#47b38f", "#fe3f01", "#ffe100", "#90dce1"];
let secretCombination = [];
let attempts = 0;
const maxAttempts = 12;
let currentGuess = [];

// Initialiser le jeu
function initGame() {
    secretCombination = [];
    for (let i = 0; i < 4; i++) {
        secretCombination.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    console.log("Combinaison secrète : ", secretCombination);

    attempts = 0;
    currentGuess = [];
    updateCurrentGuess();
    feedback.textContent = "";
    attemptsDiv.innerHTML = "";
    endMessage.innerHTML = "";

    guessForm.addEventListener("submit", handleGuess);
}

// Récupérer les éléments du DOM
const feedback = document.getElementById("feedback");
const attemptsDiv = document.getElementById("attempts");
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess");
const currentGuessDiv = document.getElementById("current-guess");
const endMessage = document.getElementById("end-message");

// Ajouter une couleur à la supposition actuelle
function addColor(color) {
    if (currentGuess.length < 4) {
        currentGuess.push(color);
        updateCurrentGuess();
    }
}

// Mettre à jour l'affichage de la supposition actuelle
function updateCurrentGuess() {
    currentGuessDiv.innerHTML = "";
    currentGuess.forEach(color => {
        const pion = document.createElement("div");
        pion.className = `pion`;
        pion.style.backgroundColor = color;
        currentGuessDiv.appendChild(pion);
    });
}

// Vérifier la supposition
function checkGuess(guess) {
    let guessArray = guess.split(",");
    attempts++;

    let correctColorAndPosition = 0;
    let correctColorWrongPosition = 0;
    let tempSecretCombination = [...secretCombination];

    guessArray.forEach((color, index) => {
        if (color === tempSecretCombination[index]) {
            correctColorAndPosition++;
            tempSecretCombination[index] = null;
        }
    });

    guessArray.forEach((color, index) => {
        if (tempSecretCombination.includes(color) && color !== secretCombination[index]) {
            correctColorWrongPosition++;
            tempSecretCombination[tempSecretCombination.indexOf(color)] = null;
        }
    });

    let attemptDiv = document.createElement("div");
    attemptDiv.className = "attempt";
    attemptDiv.innerHTML = `${guessArray.map(c => `<span class="pion" style="background-color: ${c};"></span>`).join('')}`;
    let resultDiv = document.createElement("div");
    resultDiv.className = "result";
    resultDiv.textContent = `- ${correctColorAndPosition} bien placés, ${correctColorWrongPosition} mal placés.`;
    attemptDiv.appendChild(resultDiv);
    attemptsDiv.appendChild(attemptDiv);

    if (correctColorAndPosition === 4) {
        feedback.textContent = "Félicitations ! Vous avez deviné la combinaison secrète.";
        endMessage.innerHTML = "<div>Vous avez gagné !</div>";
        guessForm.removeEventListener("submit", handleGuess);
    } else if (attempts >= maxAttempts) {
        feedback.textContent = `Dommage ! Vous avez atteint le nombre maximum de tentatives.`;
        endMessage.innerHTML = `Vous avez perdu !<br>La bonne combinaison était :<br>${secretCombination.map(c => `<span class="pion" style="background-color: ${c}; display:inline-block;"></span>`).join('')}`;
        guessForm.removeEventListener("submit", handleGuess);
    } else {
        feedback.textContent = `Tentative ${attempts}: ${correctColorAndPosition} bien placés, ${correctColorWrongPosition} mal placés.`;
    }

    currentGuess = [];
    updateCurrentGuess();
}

// Gérer la soumission du formulaire
function handleGuess(event) {
    event.preventDefault();
    if (currentGuess.length !== 4) {
        feedback.textContent = "Veuillez choisir exactement 4 couleurs.";
        return;
    }
    guessInput.value = currentGuess.join(",");
    checkGuess(guessInput.value);
}

// Réinitialiser le jeu
function resetGame() {
    guessForm.removeEventListener("submit", handleGuess);
    initGame();
}

// Initialiser le jeu à l'ouverture de la page
initGame();





















