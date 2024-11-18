// les conditions

var nom = "Anthony"; //anthony est une chaine de caratere car il est entouré de guillemets
var isPremium = true;//booleean
var age = 28 //int(integer)

if(age < 5)
{
    console.log("Tu as moin de 5 ans")
}
else if (age >=15)
{
    console.log("tu as au moin 15 ans")
}
else
{
    console.log("Tu as entre 5 & 15 ans")
}

if(isPremium || age>18) // || ou
{
    console.log("Tu es Premium")
}

if(isPremium && age>18)
{
    console.log("Voila tu es premium")
}
 age = 25; // age = 25 => permet d'attribuer la valeur
 if(age == 25); // age == 25 => permet de tester la valeur
 {
    console.log("25");
 }