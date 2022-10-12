document.write("<table>");
for(let ligne = 1 ; ligne< 11; ligne++){
    document.write("<tr>");
    for(let colonne = 1; colonne < 11; colonne++){
    if (ligne===colonne){
        document.write("<td class='carre'>" + ligne*colonne + "</td>");
    }    
    // console.log(ligne*colonne);
    else {
        document.write("<td>" + ligne*colonne + "</td>");    
    }
    
    }
    document.write("</tr>");
}
document.write("</table>");