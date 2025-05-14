let boutton = document.getElementById("btn");
let resultat = document.getElementById("result");



boutton.addEventListener('click', function(){
    let lancer = Math.random();
    let coin = Math.floor(lancer * 2)

    resultat.innerHTML = coin == 1 ? "Face" : "Pile" ;


    if coin == 1 {
        resultat.innerHTML = "face"
    } else {
        resultat.innerHTML = "Pile"
    }
})