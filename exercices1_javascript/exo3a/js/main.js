let userage;
do {
	userage = parseInt(prompt("Entrer votre âge"));
	if (userage >= 18 && userage < 120){
		alert("Age valide : vous êtes majeur");	
	} 	
	else if (userage > 0 && userage < 18) {
		alert("Age valide : vous êtes mineur");	
	}	
	else {
		alert("Age non valide");	
	}
		
}while(isNaN(userage) || userage <= 0 || userage > 120);

alert ("vous avez " + userage + " ans");
			