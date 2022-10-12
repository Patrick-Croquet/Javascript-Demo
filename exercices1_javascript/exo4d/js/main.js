for (let i=2;i<=100; i++){
    let div = 2
    let prime= true
    
    do{
        if (i%div ===0 && i!== div){
            prime=false
            break
        }
        div ++
    } while (div<= Math.round(i/2))
    if (prime){
        document.body.append(document.createElement('p'))
        document.body.lastChild.textContent=i
    }
}