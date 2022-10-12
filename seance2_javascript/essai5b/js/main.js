let element = document.getElementById('clickme');
let i = 0;
let interval;

element.style.borderRadius = "10px";
element.style.backgroundColor = "#FFFF00";

// la méthode addEventListener
// element.addEventListener('click', function(){
//     //alert('Vous avez cliqué !');
//     element.style.backgroundColor = "#00FF00";  
//     interval = setInterval(function change() {      
//             if (i > 10) {
//                 clearInterval(interval);
//             }
//             else {
//                 element.innerHTML = i++;
//             }
//         },1000);
        
//     },false);

// propriété onclick
// element.onclick = function(){
//     console.log(i);
//         // i++;
//         element.style.backgroundColor = "#00FF00"; 
//         interval = setInterval(function change() { 
//             element.innerHTML = i;
//             if (i%11 == 10) {
//             //alert("coucou");
//             clearInterval(interval);
//             }
//             else {
//                 i++;
//             }
                  
//         },1000);
// }; 

// fonction fléchée
element.onclick = function(){
    console.log(i);
        //i++;
        element.style.backgroundColor = "#00FF00"; 
        interval = setInterval( ()=> { 
            element.innerHTML = i;
            if (i%11 == 10) {
            clearInterval(interval);
            }
            else {
                i++;
            }
                  
        },1000);
};   