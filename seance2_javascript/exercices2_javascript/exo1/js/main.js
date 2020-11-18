function update(elem) {
    let p1=document.getElementById("p1");

    if (elem.getAttribute("name") == "color") {
        p1.style.background = "rgb(" + elem.value + "," + elem.value + "," + elem.value + ")";
        let c= 255 - elem.value;
        p1.style.color = "rgb(" + c + "," + c + "," + c + ")";
    }
    else if (elem.getAttribute("name") == "padding") {
        p1.style.padding= elem.value  +"px";

    }
    else if (elem.getAttribute("name") == "height") {
        p1.style.height = elem.value  +"px";
    }
    else if (elem.getAttribute("name") == "width") {
        p1.style.width = elem.value  +"px";
    }
    else if (elem.getAttribute("name") == "radius") {
        p1.style.borderRadius = elem.value  +"px";
    }
    else if (elem.getAttribute("name") == "rotation") {
        p1.style.transform = "rotate(" + elem.value  + "deg)";
    }                

}
