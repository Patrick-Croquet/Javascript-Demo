let a=2;

do{
    res=true;
    for(i=2; i<=a/2;i++){
        if(a%i===0){
            res=false;
        }
    }
    if(res===true){
        document.write(a," ");
    }
    a++
} while(a<=100);