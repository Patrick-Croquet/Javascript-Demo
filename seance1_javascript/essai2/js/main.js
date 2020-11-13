let floor = parseInt(prompt("Entrez l'étage où l'ascenceur doit se rendre (de -2 à 30) :"));

if (floor == 0) {
    alert("Vous vous trouvez déjà au rez-de-chaussée.");
} else if (-2 <= floor && floor <= 30) {
    alert("Direction l'étage n° " + floor + " !");    
} else {
    alert("L'étage n'existe pas.");
}