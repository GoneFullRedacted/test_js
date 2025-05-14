
# 🧠 Projet JavaScript — Générateur de Quiz interactif

## 🎯 Objectif

Développer une **application de quiz dynamique** en JavaScript pur, avec plusieurs questions, des réponses interactives, un score final et une interface fluide.

---

## 🛠️ Fonctionnalités à réaliser

1. Afficher une **question à la fois**, avec **plusieurs choix** de réponse.
2. Permettre à l’utilisateur de **cliquer sur une réponse**.
3. Afficher un **feedback visuel** : bonne ou mauvaise réponse (couleur, symbole…).
4. Afficher un **bouton "Suivant"** pour passer à la question suivante.
5. À la fin, afficher un **score final** et un message selon le résultat.

---

## 📦 Structure de départ

Tu peux organiser ton code en trois fichiers :
- `index.html` — structure de base
- `style.css` — mise en forme
- `script.js` — logique du quiz

---

## 🧩 Structure des données (exemple à adapter)

```js
const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    choices: ["Paris", "Lyon", "Marseille", "Nice"],
    answer: 0
  },
  {
    question: "Quel langage s’exécute dans un navigateur ?",
    choices: ["Python", "Java", "JavaScript", "C#"],
    answer: 2
  }
];
```

---

## 🧠 À toi de concevoir

- Utilise le **DOM** pour afficher la question et les choix.
- Crée des **évènements** sur les boutons.
- Ajoute une **logique de validation** des réponses.
- Gère le **score**, le passage à la question suivante, et l’écran final.

---

## 🔧 Bonus possibles

- Ajouter un **chronomètre** (global ou par question).
- Sélectionner les questions **aléatoirement**.
- Ajouter des **catégories** ou des **niveaux de difficulté**.
- **Sauvegarder le score** en `localStorage`.
- Créer une **animation d’introduction** ou de transition.

---

## 🧪 Résultat attendu

Une interface simple mais dynamique qui permet à quelqu’un :
- de faire un quiz complet,
- de savoir en temps réel ou à la fin s’il a bien répondu,
- de recommencer.