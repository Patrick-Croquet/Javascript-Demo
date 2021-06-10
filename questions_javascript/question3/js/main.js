'use strict';

const fs = require('fs');

let cars = { 
    name: 'Mike',
    marque: 'marque',
    roue: 'roue',
    couleur: 'couleur',
    prix: 'prix',
    decapotable: 'decapotable'
};
 
let data = JSON.stringify(cars, null, 2);

fs.writeFile('../cars.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');