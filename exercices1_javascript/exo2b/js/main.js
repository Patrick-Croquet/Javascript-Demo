let nombre1 , nombre2 ;
nombre1 = parseInt(prompt("Entrez un permier nombre"));
nombre2 = parseInt(prompt("Entrez un deuxième nombre"));
alert(nombre1 + nombre2);

let afficherSomme = document.getElementById('somme');
afficherSomme.style.color = '#00f';
// afficherSomme.innerHTML = '<p>Le résultat de la somme est :' + String(nombre1 + nombre2) + '</p>'; //string marche uniquement pour des entiers et non pour des float
afficherSomme.innerHTML = `<h1>Le résultat de la somme est : ${nombre1 + nombre2} </h1>`
