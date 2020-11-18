let tab = new Array();

function add_name(){
    tab.push(prompt("Saisir un nom"));
}

function random(){
    if(tab.length>0){
        let rand = Math.floor(Math.random()*tab.length);
        alert("Le gagnant est :"+tab[rand]);
    }

    else alert("Ajouter 1 nom au minimum");
}