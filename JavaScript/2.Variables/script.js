//les variables

ar nom = "Anthony"; //anthony est une chaine de caratere car il est entouré de guillemets
var isPremium = true;//booleean
var age = 30 //int(integer)

alert("Bonjour " + nom + " tu es premium ("+isPremium+") et tu as " + age + "ans");
console.log(nom);
console.log(age);

nom =  nom + " Cardinal ";
console.log(nom);

var tab = [1, 2, 15, 24];
console.log(tab[1] * 2);
tab[1] = tab[1] * 2;
console.log(tab);
console.log(tab.length);
tab.push(99);//permet d'ajouter un élément (99)
console.log(tab);
tab.pop();//permet de sortir un élément du tab (99)
console.log(tab)