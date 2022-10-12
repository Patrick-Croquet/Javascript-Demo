let prenom = prompt ("entrez votre prenom");
let hello = `Bonjour ${prenom}`;
console.log(hello);

const div = document.getElementById('div1');
div.style.backgroundColor ='pink';
div.style.color = 'blue';
div.innerHTML = `${hello}!`;



