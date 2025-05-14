## 📋 Défi JavaScript n°5 — Bouton « Copier le texte »

## 🎯 Objectif

L’utilisateur saisit du texte dans la première zone de texte, puis clique sur un bouton « Copy text ».
Ensuite, il peut faire Ctrl+V dans la seconde zone pour vérifier que le texte a bien été copié.

✅ Si les deux textes sont identiques, le défi est réussi.

## 🛠️ Cadre de travail

Crée deux fichiers :

- `index.html`
- `main.js`

## 📄 Fichier index.html

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Copy to clipboard</title>
	</head>
	<body>
		<div id="container">
			<textarea id="copy-text" rows="8" cols="80">
Enter your text here.</textarea
			><br />
			<button id="button-copy">Copy text</button><br />
			<textarea
				id="paste-text"
				rows="8"
				cols="80"
				placeholder="Paste your text here..."
			></textarea>
		</div>

		<script type="text/javascript" src="main.js"></script>
	</body>
</html>
```

## 📄 Instructions pour main.js

Ton objectif est d’écrire un script qui copie automatiquement le contenu du champ `copy-text` dans le presse-papiers lorsque l’utilisateur clique sur le bouton.

### 🧩 Étapes à suivre

- Récupère les éléments HTML avec getElementById.

- Ajoute un addEventListener("click") au bouton.

- À l’intérieur de l’évènement, utilise l’API moderne navigator.clipboard.writeText().

### 📚 Info sur l'API Clipboard (modern JavaScript)

Utilisation de l’API [Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard) et notamment de la méthode [writeText()](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText).

⚠️ Cette API fonctionne uniquement :

- sur des pages en HTTPS (ou en localhost),

- et dans une fonction déclenchée par l’utilisateur (ex : clic).

### 💡 Exemple guidé (à compléter dans ton addEventListener) :

```js
navigator.clipboard
	.writeText(/* texte à copier ici */)
	.then(() => {
		// Que faire en cas de succès ? (ex : afficher un message)
	})
	.catch((err) => {
		// Que faire en cas d'erreur ? (ex : afficher une alerte)
	})
```

## 🧠 Bonus – Réflexion sur la sécurité

Tu te demandes peut-être :

    “Et pourquoi pas un bouton pour coller automatiquement le texte dans le second champ ?”

Bonne question !
👉 **Le navigateur empêche** les scripts JavaScript de coller du contenu automatiquement pour **protéger l’utilisateur contre les vols de données sensibles** (ex : un mot de passe copié involontairement).

C’est donc une **limitation volontaire** du navigateur pour des raisons de **sécurité**.
