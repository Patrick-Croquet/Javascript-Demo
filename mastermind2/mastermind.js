const tabColor = ["BLEU", "ROUGE", "JAUNE", "VERT"];
let manches = 0;
let currentRound = 0;
let currentTry = 0;
let maxTries = 12;
let solution = [];
let points = 0;

function startGame() {
    const manchesInput = document.getElementById("manches").value;
    manches = parseInt(manchesInput);

    if (manches > 0) {
        document.getElementById("game").style.display = "block";
        nextRound();
    } else {
        alert("GAME OVER");
    }
}

function nextRound() {
    currentRound++;
    if (currentRound > manches) {
        document.getElementById("final-result").innerText = `Partie terminée. Le joueur B a accumulé ${points} points.`;
        return;
    }
    
    currentTry = 0;
    points = 0;
    solution = generateSolution();
    document.getElementById("round-info").innerText = `Manche ${currentRound}`;
    document.getElementById("result").innerText = "";
    document.getElementById("inputs").style.display = "block";
    updateTriesLeft();
}

function generateSolution() {
    return Array.from({ length: 4 }, () => tabColor[Math.floor(Math.random() * tabColor.length)]);
}

function updateTriesLeft() {
    document.getElementById("tries-left").innerText = `Essais restants : ${maxTries - currentTry}`;
}

function submitColors() {
    const test = [];
    for (let i = 1; i <= 4; i++) {
        const colorInput = document.getElementById(`color${i}`).value.toUpperCase();
        if (tabColor.includes(colorInput)) {
            test.push(colorInput);
        } else {
            alert("Veuillez entrer une couleur valide.");
            return;
        }
    }

    currentTry++;
    points++;
    checkSolution(test);
    updateTriesLeft();
}

function checkSolution(test) {
    let solCopy = [...solution];
    let testCopy = [...test];
    let coulPos = 0;
    let couleur = 0;

    for (let i = 0; i < 4; i++) {
        if (solCopy[i] === testCopy[i]) {
            coulPos++;
            solCopy[i] = "Y";
            testCopy[i] = "Z";
        }
    }

    for (let i = 0; i < 4; i++) {
        const index = solCopy.indexOf(testCopy[i]);
        if (index !== -1) {
            couleur++;
            solCopy[index] = "X";
        }
    }

    document.getElementById("result").innerText = `Vous avez ${coulPos} bon(s) élément(s) bien placé(s) et ${couleur} bon(s) élément(s) mal placé(s).`;

    if (coulPos === 4) {
        alert("Manche gagnée!");
        nextRound();
    } else if (currentTry >= maxTries) {
        alert(`Manche perdue. La solution était : ${solution.join(", ")}`);
        nextRound();
    }
}
