//les functions

var nom = "Anthony"; //anthony est une chaine de caratere car il est entouré de guillemets
var isPremium = true;//booleean
var age = 28 //int(integer)
var nb = 0;

function DireBonjour()
{
    alert("Bonjour");
}

// DireBonjour(); //permet d'appeler la function

function DireBonjourAvecParam(p)
{
    alert("Bonjour " + p);
}

// DireBonjourAvecParam(nom);

function LogNbClicks()
{
    nb++; // Idem que : nb = nb + 1;
    console.log(nb);

}