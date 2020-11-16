let start = 'Bonjour ', 
    name, end = ' !',
    result;

name = prompt('Quel est votre prénom ?');
result = start + name + end;
alert(result);

console.log(result);

document.open();
document.write("<div id='monid'>"+ result +"</div>");
document.close();