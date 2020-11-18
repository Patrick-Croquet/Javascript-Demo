// JavaScript Document
function str_fisrt_letter(ch){
    /*L'expression régulière qui ^[a-d] pour tester si la chaîne commence par une lettre entre a et le modificateur i pour ne pas faire de différence entre majuscules et minuscules   */
       var pattern =/^[a-d]/i; 
       var res = document.getElementById("res1");
       if(pattern.test(ch)){
           res.innerHTML=ch+" chaîne valide  commence par une lettre entre a et d ";
       }
       else {
           res.innerHTML=ch+" chaîne invalide ";
       }
  }

  function str_email(ch){
       var res = document.getElementById("res2");
       /*La fonction split(@) transforme la chaîne en tableau de sous chaines à partir du caractère séparateur ici '@' .Si c.lenght=1 donc la chaîne ne contient pas @ et si c.lenght>2 alors il contient plusieurs '@' */
       var c =ch.split('@');
       if(c.length==2){
           res.innerHTML=ch+" chaîne valide : contient un seul caractère @  ";
       }
       else {
           res.innerHTML="chaîne invalide!";
       }
  }
 

  function str_number(ch){
      var res = document.getElementById("res3");
        var pattern =/\d/;
        /*La fonction seach peut prendre en paramètre une expression régulière*/
      if(ch.search(pattern)!=-1){
         res.innerHTML=ch+" chaîne valide : contient un nombre  ";
      }
      else {
           res.innerHTML=ch+" chaîne invalide : ne contient pas un nombre  ";
       }
  }
  

  function str_replace(ch){
      var res = document.getElementById("res4");
        /*La fonction replace peut prendre en paramètre une expression régulière ici le modificateur g pour un recherche globale afin de remplacer tous les chiffres de la chaîne*/
        ch2=ch.replace(/\d/g,"*");
        res.innerHTML=ch2;
      
  }