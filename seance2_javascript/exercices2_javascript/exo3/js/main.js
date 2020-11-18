let sp = document.getElementsByTagName("span");
let btn_start = document.getElementById("start");
let btn_stop = document.getElementById("stop");
let t;
let ms = 0, s = 0, mn = 0, h = 0;


// fonction start 

function start(){
    t = setInterval(update_chrono,100);
    btn_start.disabled = true;
}   

// fonction update_chrono

function update_chrono() {
    ms+=1;

    if(ms==10){
        ms=1;
        s+=1;
    }
    if(s==60){
        s=0;
        mn+=1;
    }
    if(mn==60){
        mn=0;
        h+=1;
    }
    
    sp[0].innerHTML =h+" h";
    sp[1].innerHTML =mn+" min";
    sp[2].innerHTML =s+" s";
    sp[3].innerHTML =ms+" ms";
}

// fonction stop

function stop() {
    clearInterval(t); // Arrête le cadensement
    btn_start.disabled=false;
}

// fonction reset 

function reset() {
    clearInterval(t); // Arrête le cadensement
    btn_start.disabled=false;
    ms=0,s=0,mn=0,h=0;

    sp[0].innerHTML =h+" h";
    sp[1].innerHTML =mn+" min";
    sp[2].innerHTML =s+" s";
    sp[3].innerHTML =ms+" ms";

}


