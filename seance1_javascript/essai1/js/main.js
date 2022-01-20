let start = 'Bonjour ', 
    prenom,
    end = ' !',
    result;

prenom = prompt('Quel est votre prénom ?');
result = start + prenom + end;
alert(result);

console.log(result);

document.open();
document.write("<div id='monid'>"+ result +"</div>");
document.close();