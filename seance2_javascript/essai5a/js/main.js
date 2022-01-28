let element = document.getElementById('clickme');

element.style.borderRadius = "10px";
element.style.backgroundColor = "#FFFF00";

element.addEventListener('click', function(){
    //alert('Vous avez cliqué !');
    element.style.backgroundColor = "#00FF00";
    },false);

element.addEventListener('mouseover', function(){
    //alert('Vous avez cliqué !');
    element.style.backgroundColor = "#FF0000";
    },false);

element.addEventListener('mouseout', function(){
    //alert('Vous avez cliqué !');
    element.style.backgroundColor = "#FFFF00";
    },false);