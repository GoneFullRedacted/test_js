# 🎯 Défi JavaScript n°1 — Pile ou Face

## 🧩 Objectif :

Lorsque l'utilisateur clique sur le bouton « Heads or Tails », un message aléatoire s’affiche dans la page : "Heads" ou "Tails".

## 🛠️ Étape 1 : Préparer les fichiers

Crée un projet avec deux fichiers :

- index.html (structure HTML de base)
- main.js (le script que tu vas coder)

### 🧾 Fichier HTML (à copier tel quel) :

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Heads or Tails</title>
	</head>
	<body>
		<button id="btn">Heads or Tails</button>
		<div id="result">Click on the button!</div>
		<script src="main.js"></script>
	</body>
</html>
```

👉 Ne modifie pas le fichier HTML. Toute la logique doit être écrite dans main.js.

## 🧠 Étape 2 : Écrire le JavaScript (main.js)

1. Récupère les éléments nécessaires du HTML (le bouton et la div) grâce au DOM.
2. Ajoute un évènement click sur le bouton.
3. Lorsque l’utilisateur clique :
   - Une fonction est appelée.
   - Elle génère un choix aléatoire.
   - Elle modifie le contenu de la div result pour afficher "Heads" ou "Tails".
   - (Facultatif) Elle affiche aussi le résultat dans la console.

### 💡 Indice

Pour tirer un résultat aléatoire (pile ou face), tu peux utiliser ces outils JavaScript :

`Math.random()`
→ Cette fonction renvoie un nombre aléatoire entre 0 (inclus) et 1 (exclus), comme par exemple 0.23, 0.78, etc.
→ À elle seule, elle ne donne pas encore un résultat simple comme 0 ou 1.

`Math.floor()`
→ Cette fonction arrondit à l’entier inférieur.
→ Par exemple, Math.floor(0.99) renvoie 0 et Math.floor(1.5) renvoie 1.

👉 En combinant ces deux fonctions, tu peux obtenir soit 0, soit 1 de façon aléatoire — ce qui est parfait pour représenter pile (0) ou face (1).
Tu pourras ensuite utiliser ce nombre dans une condition (if) ou un opérateur ternaire (? :) pour afficher le bon texte.
