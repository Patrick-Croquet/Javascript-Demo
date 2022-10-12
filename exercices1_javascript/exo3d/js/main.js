let age=0;
do{
    age=parseInt(prompt("Entrez votre âge"));
    if (age>=0 && age<18){
        alert("Vous n'êtes pas majeur, vous ne pouvez entrer");
    }
    else if (age>=18){
        alert("Tu peux entrer bg");
    }
    else{
        alert("Cela ne se peut, veuillez recommencer");
    }
}while (age<0);

