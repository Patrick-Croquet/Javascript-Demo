let element = document.getElementById('clickme');

element.style.borderRadius = "10px";
//element.style.backgroundColor = "#FFFF00";

element.addEventListener('click', function(){
    //alert('Vous avez cliqué !');
    this.classList.add("bgCred");
    },false);

element.addEventListener('mouseover', function(){
    //alert('Vous avez cliqué !');
    //element.style.backgroundColor = "#FF0000";
    this.classList.add("bgCgreen");
    },false);

element.addEventListener('mouseout', function(){
    //alert('Vous avez cliqué !');
    //element.style.backgroundColor = "#FFFF00";
    this.classList.remove("bgCgreen");
    if (this.classList.contains('bgCred')) {
        this.classList.remove("bgCred");
        }
    },false);