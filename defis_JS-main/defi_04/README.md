# 🔐 Défi JavaScript n°4 — Comparer les mots de passe

## 🎯 Objectif

Lorsque l'utilisateur saisit à nouveau son mot de passe dans le second champ, le script affiche un message dynamique :

- ✅ si les deux mots de passe correspondent (en vert),
- ❌ sinon, un message d’erreur (en rouge).

## 🛠️ Cadre de travail

Crée deux fichiers :

- `index.html`
- `main.js`

### 📄 Fichier `index.php`

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Check Password</title>
	</head>
	<body>
		<form action="">
			<fieldset>
				<legend>Register:</legend>

				<label for="login">Login: </label>
				<input type="text" name="login" /><br />

				<label for="password">Password: </label>
				<input type="password" name="password" id="password" /><br />

				<label for="check-password">Re-enter your password:</label>
				<input type="password" name="check-password" id="check-password" />

				<span id="message"></span><br />

				<input type="button" value="Send" />
			</fieldset>
		</form>

		<script type="text/javascript" src="main.js"></script>
	</body>
</html>
```

## 🔧 Aide technique

- Récupère le contenu des champs avec .value.
- Pour changer la couleur d’un message, utilise .style.color.
- Pour modifier le texte affiché, utilise .innerHTML.

## 🛠 Astuces

- Ajoute un écouteur d’événement sur le champ de confirmation (#check-password).
- Tu peux comparer son contenu avec celui du champ #password.

## 🌟 Bonus : Vérifier la solidité du mot de passe

Pour renforcer la sécurité, un bon mot de passe doit respecter plusieurs critères.

✨ **Tu peux ajouter les vérifications suivantes :**
| Critère | À valider avec... |
| ------------------------------------------------- | ----------------------------- |
| Bonus 1 : 8 caractères minimum | `password.value.length >= 8` |
| Bonus 2 : au moins une majuscule et une minuscule | RegExp `/[A-Z]/` et `/[a-z]/` |
| Bonus 3 : au moins un chiffre | RegExp `/[0-9]/` |
| Bonus 4 : au moins un caractère spécial | RegExp `/[\W_]/` |

💬 En fonction des règles respectées, affiche un message du type :

- "Mot de passe trop faible"
- "Mot de passe acceptable"
- "Mot de passe sécurisé"

👉 Tu peux modifier le HTML pour afficher un second message (`<span id="strength"></span>`) ou améliorer la présentation.
