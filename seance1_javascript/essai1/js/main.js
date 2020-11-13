let start = 'Bonjour ', 
    name, end = ' !',
    result;

name = prompt('Quel est votre prénom ?');
result = start + name + end;
alert(result);

console.log(result);

document.open();
document.write(result);
document.close();