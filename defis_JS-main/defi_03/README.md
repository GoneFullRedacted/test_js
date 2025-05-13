# 🎯 Défi JavaScript n°3 — Détecter la touche Verr. Maj. (Caps Lock)

## 🧩 Objectif

Lorsque l’utilisateur clique dans le champ de saisie pour taper du texte, un message d’avertissement s’affiche si la touche Verr. Maj. (Caps Lock) est activée.

## 🛠️ Cadre de travail

Crée trois fichiers :

- `index.html`
- `style.css`
- `main.js`

👉 Copie ce code dans index.html :

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Check Caps Lock</title>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body>
		<p>Enable or disable caps lock :</p>
		<input id="input" />
		<p id="warning">⚠️ Caps Lock is activated...</p>

		<script type="text/javascript" src="main.js"></script>
	</body>
</html>
```

👉 Et ceci dans style.css :

```css
#warning {
	display: none;
	color: orange;
}
```

## 📄 Instructions pour main.js

Ton script devra afficher ou masquer le message d’avertissement en fonction de l’état de la touche Verr. Maj.

Tu peux partir de cette base :

```js
document.getElementById('input').addEventListener('keyup', function (event) {
	// Ton code ici
})
```

## 💡 Indice

Tu peux utiliser une méthode JavaScript spécifique pour savoir si la touche Caps Lock est activée au moment d’un évènement clavier :

`event.getModifierState("CapsLock")`

→ Cette méthode renvoie true si la touche Caps Lock est activée, false sinon.

👉 Utilise ce retour pour modifier le style d’un élément, en particulier warning.style.display.

Par exemple :

```js
warning.style.display = 'block' // pour l’afficher
warning.style.display = 'none' // pour le cacher
```

✅ Résultat attendu
| État de Caps Lock | Résultat sur la page |
| ----------------- | --------------------------------- |
| Activé | Le message ⚠️ s’affiche en orange |
| Désactivé | Le message est masqué |

## 🌟 Bonus (facultatif)

**🧮 Bonus 1 – Verrouillage Numérique (Num Lock)**

Tu peux aussi détecter si le **pavé numérique** est actif avec :

```js
event.getModifierState('NumLock')
```

**🧠 Bonus 2 – Message dynamique selon l’état**

Affiche un message différent selon la combinaison des touches activées :

| État             | Message affiché                               |
| ---------------- | --------------------------------------------- |
| Caps Lock seul   | ⚠️ Caps Lock is activated...                  |
| Num Lock seul    | 🔢 Num Lock is activated...                   |
| Les deux activés | ⚠️ Caps Lock and 🔢 Num Lock are activated... |
| Aucun            | Rien (message caché)                          |
