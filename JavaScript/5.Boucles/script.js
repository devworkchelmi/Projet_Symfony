var cpt = 100;
var tab = ["A", "B", "C", "D", "E"];
var tab2 = [2,4,6,8,10];

for(i=0 ; i<10 ; i++) //boucle jusqu'a ce que i arrive a 10, i=0 et i++ ajoute 1 a chaque fois jusqu'a 10
{
    console.log(i);
}

for(i=0 ; i<tab.lenght ; i++)
{
    console.log(i + " = " + tab[i]);
}
while(cpt > 0)
{
    console.log(cpt);
    cpt--;
}

function Mult(t)
{
    for(i=0 ; i<t.lenght ; i++)
    {
        t[i] = t[i] * 2;
    }
}
console.log(tab2);
Mult(tab2);
console.log(tab2);
// Mult(tab2);
// console.log(tab2);
// Mult(tab2);