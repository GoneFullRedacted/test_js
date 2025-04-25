
// Exercice Age

let age = document.getElementById('age').textContent

if (age < 12) {
    document.getElementById('message').innerText = "Tu es un enfant";
} else if (age <= 17) {
    document.getElementById('message').innerText = "Tu es un ado";
} else if (age > 17) {
    document.getElementById('message').innerText = "Tu es un adulte";
} else {
    document.getElementById('message').innerText = "undefined";
}

// Exercice MDP

let motDePasse = document.getElementById('mdp').textContent

if (motDePasse == "1234") {
    document.getElementById('access').innerText = "Accès utilisateur";
} else if (motDePasse === `admin`) {
    document.getElementById('access').innerText = "Accès admin";
} else {
    document.getElementById('access').innerText = "Mot de passe incorrect";
}

// Exercice ternaire

let aFiniExercice = document.getElementById('check').textContent

aFiniExercice ? document.getElementById('res').innerHTML = `Exercice terminé`: document.getElementById('res').innerHTML = `Exrcice non terminé`;

// Exercice combinaison

let prenom = document.getElementById('firstname').textContent;

// let estConnecte = $("#mchbox").is(":checked");

document.getElementById("mchbox").checked ? estConnecte = true : estConnecte = false ;

if (prenom == "Sébastien" && estConnecte == true) {
    document.getElementById('cocheck').innerText = "Bonjour " + prenom ;
} else if (prenom != "Sébastien"){
    document.getElementById('cocheck').innerText = "Bonjour nouvel utilisateur, change ton pseudo !";
} else {
    document.getElementById('cocheck').innerText = "Inscrivez-vous !";
}