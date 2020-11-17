for(a=2; a<=100; a++){
    resultat=true;
    for(i=2;i<=a/2; i++){
        if(a%i===0){
            resultat=false;
        }
    }
    if (resultat===true){
        document.write(a," ");
    }
}