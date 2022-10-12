// document.write("Les nombres premiers compris entre 0 et 100 sont :<br>");
			/* 0 et 1 ne sont pas des nombres premiers */
			// On cherche les nombres premiers jusqu'à max
			var max = 100;

			for(i = 2; i <= max; i++) {

				// La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.	
				// La fonction Math.sqrt() renvoie la racine carrée d'un nombre.	
				var j = 1;
				var racine = Math.floor(Math.sqrt(i)); 

				do {
				j++;
				} while(j <= racine && i%j != 0); //Si une seule valeur vaut false alors la condition ne sera pas vérifiée

				if(j > racine) {

				// On affiche les nombres premiers trouvés
				document.write(i +"<br>");
				}

			}