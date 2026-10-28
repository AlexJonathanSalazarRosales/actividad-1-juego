const questions = [
  {
    question: "Pregunta 1. ¿Qué lenguaje se utiliza para definir la estructura de una página web?",
    options: [
      { key: "A", text: "A) CSS" },
      { key: "B", text: "B) HTML" },
      { key: "C", text: "C) JavaScript" },
      { key: "D", text: "D) SQL" }
    ],
    correct: "B"
  },
  {
    question: "Pregunta 2. ¿Qué lenguaje se utiliza para cambiar los colores y el diseño de una página web?",
    options: [
      { key: "A", text: "A) PHP" },
      { key: "B", text: "B) Python" },
      { key: "C", text: "C) CSS" },
      { key: "D", text: "D) SQL" }
    ],
    correct: "C"
  },
  {
    question: "Pregunta 3. ¿Qué lenguaje permite añadir interactividad a una página web?",
    options: [
      { key: "A", text: "A) JavaScript" },
      { key: "B", text: "B) HTML" },
      { key: "C", text: "C) CSS" },
      { key: "D", text: "D) XML" }
    ],
    correct: "A"
  },
  {
    question: "Pregunta 4. ¿Qué significa HTTP?",
    options: [
      { key: "A", text: "A) HighText Transfer Program" },
      { key: "B", text: "B) HyperText Transfer Protocol" },
      { key: "C", text: "C) HyperTool Text Process" },
      { key: "D", text: "D) Home Transfer Text Protocol" }
    ],
    correct: "B"
  },
  {
    question: "Pregunta 5. ¿Qué etiqueta HTML se utiliza para crear un enlace?",
    options: [
      { key: "A", text: "A) <img>" },
      { key: "B", text: "B) <p>" },
      { key: "C", text: "C) <div>" },
      { key: "D", text: "D) <a>" }
    ],
    correct: "D"
  },
  {
    question: "Pregunta 6. ¿Qué método HTTP se utiliza habitualmente para solicitar datos de un servidor?",
    options: [
      { key: "A", text: "A) SEND" },
      { key: "B", text: "B) PUSH" },
      { key: "C", text: "C) GET" },
      { key: "D", text: "D) LOAD" }
    ],
    correct: "C"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let answeredCurrent = false;

const questionProgressEl = document.getElementById("question-progress");
const scoreDisplayEl = document.getElementById("score-display");
const quizScreenEl = document.getElementById("quiz-screen");
const resultScreenEl = document.getElementById("result-screen");
const quizFormEl = document.getElementById("quiz-form");
const questionTextEl = document.getElementById("question-text");
const optionsContainerEl = document.getElementById("options-container");
const feedbackMessageEl = document.getElementById("feedback-message");
const submitBtnEl = document.getElementById("submit-btn");
const nextBtnEl = document.getElementById("next-btn");
const finalScoreTextEl = document.getElementById("final-score-text");
const restartBtnEl = document.getElementById("restart-btn");

function updateStatusBar() {
  questionProgressEl.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
  scoreDisplayEl.textContent = `Puntuación: ${score} / ${questions.length}`;
}

function renderQuestion() {
  answeredCurrent = false;
  const currentQuestion = questions[currentQuestionIndex];

  updateStatusBar();
  questionTextEl.textContent = currentQuestion.question;
  optionsContainerEl.innerHTML = "";

  feedbackMessageEl.hidden = true;
  feedbackMessageEl.textContent = "";
  feedbackMessageEl.className = "feedback";

  submitBtnEl.hidden = false;
  submitBtnEl.disabled = false;
  nextBtnEl.hidden = true;

  currentQuestion.options.forEach((opt, index) => {
    const label = document.createElement("label");
    label.className = "option-label";
    label.setAttribute("for", `option-${opt.key}`);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "quiz-option";
    input.id = `option-${opt.key}`;
    input.value = opt.key;
    input.className = "option-input";
    input.required = true;

    const span = document.createElement("span");
    span.textContent = opt.text;

    label.appendChild(input);
    label.appendChild(span);
    optionsContainerEl.appendChild(label);

    if (index === 0) {
      input.focus();
    }
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  if (answeredCurrent) return;

  const selectedInput = quizFormEl.querySelector('input[name="quiz-option"]:checked');
  if (!selectedInput) {
    feedbackMessageEl.textContent = "Por favor, selecciona una opción antes de comprobar.";
    feedbackMessageEl.className = "feedback incorrect";
    feedbackMessageEl.hidden = false;
    return;
  }

  answeredCurrent = true;
  const selectedKey = selectedInput.value;
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedKey === currentQuestion.correct;

  const allInputs = quizFormEl.querySelectorAll('input[name="quiz-option"]');
  allInputs.forEach((input) => {
    input.disabled = true;
    input.parentElement.classList.add("disabled");
  });

  if (isCorrect) {
    score += 1;
    feedbackMessageEl.textContent = "¡Respuesta correcta! Sumas 1 punto.";
    feedbackMessageEl.className = "feedback correct";
  } else {
    const correctOption = currentQuestion.options.find(
      (opt) => opt.key === currentQuestion.correct
    );
    feedbackMessageEl.textContent = `Respuesta incorrecta. La opción correcta era ${correctOption.text}.`;
    feedbackMessageEl.className = "feedback incorrect";
  }

  feedbackMessageEl.hidden = false;
  updateStatusBar();

  submitBtnEl.hidden = true;
  nextBtnEl.hidden = false;
  nextBtnEl.textContent =
    currentQuestionIndex === questions.length - 1
      ? "Ver resultado final"
      : "Siguiente pregunta";
  nextBtnEl.focus();
}

function handleNextQuestion() {
  currentQuestionIndex += 1;
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreenEl.hidden = true;
  resultScreenEl.hidden = false;
  finalScoreTextEl.textContent = `Has obtenido ${score} de ${questions.length} puntos.`;
  restartBtnEl.focus();
}

function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  resultScreenEl.hidden = true;
  quizScreenEl.hidden = false;
  renderQuestion();
}

quizFormEl.addEventListener("submit", handleFormSubmit);
nextBtnEl.addEventListener("click", handleNextQuestion);
restartBtnEl.addEventListener("click", restartGame);

renderQuestion();