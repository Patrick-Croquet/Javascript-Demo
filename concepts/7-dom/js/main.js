// Sélectionner un élément HTML par son ID
let paragraphe = document.getElementById("monParagraphe");

// Modifier le contenu textuel d'un élément
paragraphe.textContent = "Ce paragraphe a été modifié.";

// Sélectionner tous les éléments HTML d'une classe
let elements = document.querySelectorAll(".maClasse");

// Appliquer un style CSS à tous les éléments sélectionnés
elements.forEach(element => {
  element.style.backgroundColor = "red";
});
