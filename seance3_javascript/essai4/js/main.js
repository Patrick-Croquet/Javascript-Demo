// let myString = "C'est un test";
// let myArray = myString.split(' ');

// length = myArray.length;

// for(let i=0;i<length; i++){ 
//     //console.log('Index : ' + i+ '\n' +'Valeur : ' + myArray[i]);
//     console.log('\n' + myArray[i]);
// }


let myArray = ["C’est", "un", "test"];
myArray.forEach(function(value, index) { 
    //console.log('Index : ' + index + '\n' +'Valeur : ' + value); 
    console.log('\n' + value);
    });

let myArray2 = ["C’est", "un", "test"];
myArray.forEach(element => console.log('\n' + element));

let animalsArray = ["cat", "dog", "fish"];
for (let value of animalsArray){
    console.log(value);
}

let Person = {
        nick: 'Sébastien',
        age: 25,
        sex: 'm',
        parent: 'aîné',
        work: 'Développeur'
    };
 
for (let property in Person) {
    console.log(`${property} => ${Person[property]}`);
}
