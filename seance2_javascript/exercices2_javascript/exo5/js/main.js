let tab = new Array(); // Objet tableau
//let tab = []; //tableau vide 

function add_name(){
    tab.push(prompt("Saisir un nom"));
}

function random(){
    if(tab.length>0){
        let rand = Math.floor(Math.random()*tab.length); // Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[
        alert("Le gagnant est :"+tab[rand]);
    }

    else alert("Ajouter 1 nom au minimum");
}