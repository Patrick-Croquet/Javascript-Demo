let userage = parseInt(prompt("Entrer votre âge"));
			if ( (isNaN(userage)) || userage <= 0 || userage > 150) {
				alert("Age non valide");
				document.write("Voulez-vous saisir correctement votre âge ? [ok]");	
			}
			else {
				alert(userage+ " est valide");
				document.write("Vous avez " +userage+ " ans." );	
			}