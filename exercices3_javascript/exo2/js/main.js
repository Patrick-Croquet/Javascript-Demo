 // Ecrire une fonction Javascript qui vérifie si une chaîne passée en argument est un palindrome.

function check_Palindrome(str_entry){
    // Changer la casse des caractères de la chaîne en minuscule et supprimer les caractères non-alphanumériques.  
    let chaine = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,''); 
    let nombrecar = 0;
    // alert(chaine);

    // Vérifier si la chaîne de caractères est vide.
    if (chaine===""){

        document.write("ceci n'est pas un palindrome"); 
        return false;
    }
            
    // Vérifier si la longueur de la chaîne de caractères est paire ou impaire. 
if ((chaine.length) % 2 === 0){
    nombrecar = (chaine.length) / 2;
    
}
else {
    // Si la longueur de la chaîne de caractères est 1 alors c'est un palindrome.	  
        if (chaine.length === 1){
            document.write(str_entry +"c'est un palindrome ");

            return true;
        }
        else {
    // Si la longueur de la chaîne de caractères est impaire ignorer le caractère du milieu
        nombrecar = (chaine.length-1) / 2	             
    }
}    
    // A partir du premier et du dernier caractère vérifier chacun des caractères suivants dans une boucle for.
    for (i=0 ; i<nombrecar ; i++){
    // Comparer les caractères et s'ils ne correspondent pas, ce n'est pas un palindrome
    
    if(chaine[i] != chaine.slice(-1-i)[0]) 	{
        document.write(str_entry +" : ce n'est pas un palindrome<br />");

        return false;
     }
}
document.write(str_entry +" : c'est un palindrome<br />");
return true;  
}

    check_Palindrome('php');
    check_Palindrome('éric notre valet alla te laver ton ciré');
    check_Palindrome('javascript');