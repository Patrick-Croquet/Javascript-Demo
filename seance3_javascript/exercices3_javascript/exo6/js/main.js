function find_longest_word(str)
{
  const regex = /\w[a-z\u00E0-\u00FC]{0,}/gi; // récupère les mots dans str
  //const regex = /[A-Z]/gi; // récupère les lettres
  let array1 = str.match(regex);
  let result = array1[0]; //Tutorial
  //alert(array1.length); // Affiche 3

  for(let x = 0 ; x < array1.length ; x++) 
  {
    if(result.length < array1[x].length)
    {
      result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Tutorial Développement Web'));
document.write(find_longest_word('Tutorial Développement Web'));