// Hardcoded questions, options, and correct answers
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "Who is the CEO of Tesla?",
        options: ["Bill Gates", "Elon Musk", "Mark Zuckerberg", "Sundar Pichai"],
        answer: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Venus"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElements = document.querySelectorAll("#options li span");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const retakeButton = document.getElementById("retake-button");


nextButton.addEventListener("click", handleNextQuestion);
retakeButton.addEventListener("click", retakeQuiz);


function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    currentQuestion.options.forEach((option, index) => {
        optionsElements[index].textContent = option;
    });

    document.querySelector('input[name="option"]:checked')?checked=false;
}

function handleNextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const selectedValue = parseInt(selectedOption.value);
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (selectedValue === correctAnswer) {
            score++;
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz").style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = score;
}
function retakeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    document.getElementById("quiz").style.display = "block";
    displayQuestion();
}
displayQuestion();
