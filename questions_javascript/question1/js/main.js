let array = ['tomate','patate', 'chou', 'poireau','courgette'];

let mydiv = document.getElementById("legumes");
let liste = "";
for(index=0;index<array.length;index++){
  //création la liste non ordonnée
  liste += "<li>"+array[index]+"</li>";
}
mydiv.innerHTML= "<ul>"+ liste +"</ul>";
