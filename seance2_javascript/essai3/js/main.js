let link = document.getElementById('myLink');
alert(link);
alert(typeof(link));

let href = link.getAttribute('href');
alert(href);

link.setAttribute('href', 'https://www.afpa.fr');
link = document.getElementById('myLink');
alert(link);