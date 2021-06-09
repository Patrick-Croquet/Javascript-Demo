class voiture {
       constructor(marque, roue, couleur, prix, decapotable){
           this.marque = marque;
           this.roue = roue;
           this.couleur = couleur;
           this.prix = prix;
           this.decapotable = decapotable;
       }   
    }
let mycar1 = new voiture("Alpine", "4", "blanche", "20000",false);
let mycar2 = new voiture("Lomborgini", "4", "noir mate", "200000",false);

let cars =[mycar1, mycar2];

let mydiv = document.getElementById("voiture");
let mongarage ="";
for(index=0;index<cars.length;index++){
 mongarage += "C'est une "+cars[index].marque+ " "+cars[index].couleur+" avec "+cars[index].roue+" roues" +"<div class=\"price\">"+cars[index].prix+" €</div>";
}
mydiv.innerHTML = mongarage;
