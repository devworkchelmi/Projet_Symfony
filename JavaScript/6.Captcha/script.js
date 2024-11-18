//récuperer la valeur d'un input

//document.getElementById("res").value
function CheckCaptcha()
{
    var res = document.getElementById("res").value;
    var rep = 4; //réponse attendu
    if(res == rep) //si resultat attendu et = a réponse
    {
        alert("Bravo !"); // affiche ce msg
    }
    else // sinon
    {
        alert("Essaye encore !"); //affiche celui ci.
    }
}

// res = 4;

// document.getElementById("res")
// {
//     if(res = 4)

//         console.log(res);
// }