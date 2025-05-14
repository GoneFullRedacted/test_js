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
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const nextButton = document.getElementById("next-btn");
  const resultElement = document.getElementById("result");
  const quizElement = document.getElementById("quiz");
  const scoreElement = document.getElementById("score");
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    choicesElement.innerHTML = "";
  
    q.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => selectAnswer(button, index));
      choicesElement.appendChild(button);
    });
  }
  
  function selectAnswer(button, index) {
    const correct = questions[currentQuestion].answer;
    const buttons = choicesElement.querySelectorAll("button");
  
    buttons.forEach(btn => btn.disabled = true);
  
    if (index === correct) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("wrong");
      buttons[correct].classList.add("correct");
    }
  
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      nextButton.style.display = "none";
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    quizElement.classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.textContent = `Vous avez obtenu ${score} sur ${questions.length}`;
  }
  
  showQuestion();
  