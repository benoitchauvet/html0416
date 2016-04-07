// commentaire simple

var nom = "morrisson";

/*
 Commentaire multiligne
*/

//nom = nom.toUpperCase();

//console.log(nom);

var maSection = document.getElementById("alpes");

maSection.className = "toto";

//maSection.innerHTML = "<a href='http://www.google.fr'>cliquez moi</a>";

var mesImages = document.getElementsByTagName("img");

for (var i=0; i<mesImages.length; i++)
  {
    //mesImages[i].setAttribute("src", "/images/mb.jpg");
    mesImages[i].src = "/images/mb.jpg";
  }

//maSection.id = "pasalpes";

var monElement = 
    document.querySelector("#alpes article");

monElement.style.color = "yellow";
monElement.style.backgroundColor = "green";

monElement.querySelector("h2").innerHTML = "PLOP";

var mesArticles = 
    document.querySelectorAll("article:nth-of-type(even)");

for(var i=0; i<mesArticles.length; i++)
{
    mesArticles[i].style.backgroundColor = "hotpink";
}
