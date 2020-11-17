var th = "<th>";
		var th_ = '</th>';
		var tr = '<tr>';
		var tr_ = '</tr>';
		var td = '<td>';
		var td_ = '</td>';

		document.write("<table border=1");

 		for (i=0;i<10;i++) {
   			document.write(tr)
   			for (j=0;j<10;j++) {
     			if (!j) {
       				document.write(th);
       				if (!i) {document.write('X');}
       				else {document.write(i);}
       				document.write(th_);
     			}
     			else {
       				if (!i) {
         				document.write(td);
         				document.write(j);
         				document.write(td_);
       				}
       				else {
         				document.write(td);
         				document.write(i*j);
         				document.write(td_);
       				}
     			}
   			}
   			document.write(tr_);
 		}

 		document.write('</table>');