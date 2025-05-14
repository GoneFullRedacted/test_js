# Procédure pour la création du fichier js

- Déclaration des questions via des constantes, sous formes d'arrays. 

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

- Ensuite définir la question actuelle (0) au départ, et le score de départ (0) lui aussi.

- Définir les constantes (ou let) en utilisant les éléments possèdants un ID dans le html

- Créer une fonction qui permet d'afficher la question

- Créer la fonction d'affichage et de sélection de la réponse. Doit empécher les boutons de fonctionner d'avantage, et ajoute des classes aux boutons.
De plus affiche le bouton "next".

- Le bouton next qui au clic éxécute la question suivante, sinon elle éxécute l'affichage du résultat

- Déterminer la fonction showresult pour cacher le quizz, montrer le résultat et afficher le score sur X questions.