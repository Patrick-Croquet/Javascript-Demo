for(var j=1;j<=10;j++){
    document.write("<h4>La table de multiplication du nombre : "+j+"</h4>")
    document.write("<table border>");
    for(var i=1;i<=10;i++){
        document.write("<tr>");
        document.write("<td>"+j+" x "+i+" =</td>");
        document.write("<td>"+j*i+"</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}