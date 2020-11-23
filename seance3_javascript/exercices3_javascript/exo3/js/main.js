// Ecrire une fonction Javascript qui génère toutes les combinaisons d'une chaîne de caractères.  
function substrings(str1)  
{  
var array1 = [];  
  for (var x = 0, y = 1; x < str1.length; x++,y++)   
  {  
   array1[x]=str1.substring(x, y); 
    }
   //alert(array1 + ' - ' + array1.length); //Affiche c,h,a,t - 4 
var combi = [];  
var temp= "";  
var slent = Math.pow(2, array1.length);  
  
for (var i = 0; i < slent ; i++)  
{  
    temp= "";  
    for (var j = 0; j < array1.length ; j++) {  
        if ((i & Math.pow(2,j))){   
            temp += array1[j];  
        }  
    }  
    if (temp !== "")  
    {  
        combi.push(temp);  
    }  
}  
  console.log(combi.join("\n"));  
  document.write(combi.join("\n"));	
}  
  
substrings("chat"); 