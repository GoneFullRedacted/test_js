let pw  = document.getElementById('password')
let pwcheck = document.getElementById('check-password')
let warn = document.getElementById('message')
let valid = document.getElementById('btn')
let str = document.getElementById('strength')


valid.addEventListener('click', () => {
    if (pw.value === pwcheck.value) {
    warn.innerHTML = "✅ Les mots de passe correspondent.";
    warn.style.color = "green";
    } else {
    warn.innerHTML = "❌ Les mots de passe ne correspondent pas.";
    warn.style.color = "red";
    }
    });

    // Récupération des éléments
const password = document.getElementById("password");
const checkPassword = document.getElementById("check-password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");

// Fonction de comparaison des mots de passe
checkPassword.addEventListener("input", () => {
  if (checkPassword.value === password.value) {
    message.innerHTML = "✅ Les mots de passe correspondent.";
    message.style.color = "green";
  } else {
    message.innerHTML = "❌ Les mots de passe ne correspondent pas.";
    message.style.color = "red";
  }
});

// Vérification de la solidité du mot de passe
password.addEventListener("input", () => {
    const value = password.value;
    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[\W_]/.test(value)) score++;

    switch (score) {
        case 0:
        case 1:
        str.innerHTML = "🔴 Mot de passe trop faible";
        str.style.color = "red";
        break;
        case 2:
        str.innerHTML = "🟠 Mot de passe acceptable";
        str.style.color = "orange";
        break;
        case 3:
        case 4:
        str.innerHTML = "🟢 Mot de passe sécurisé";
        str.style.color = "green";
        break;
  }
});
