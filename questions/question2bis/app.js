let nbPhotocopies;
let prixTotal;
let btn = document.getElementById('bouton');
let message = document.getElementById('message');


function calculPrix(nbPhotocopies){
    
    if(nbPhotocopies<=10){
        prixTotal = nbPhotocopies*0.1;
    }else if(nbPhotocopies<=30){
        prixTotal = (10*0.1) + (nbPhotocopies-10)*0.09;
    }else{
        prixTotal = (10*0.1) + (20*0.09) + ((nbPhotocopies-30)*0.08);
    }
    
    
    prixTotal = Math.ceil(prixTotal * 1000) / 1000;
    
    message.innerHTML = `Le prix total est de : ${prixTotal.toFixed(2)} euros`;
}

//nbPhotocopies = document.getElementById("nbcopie").value;


btn.addEventListener('click', () => {
    nbCopies = document.getElementById("nbcopie").value;
    calculPrix(nbCopies);
},false)