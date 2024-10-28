const quizzes = {
    Java: [
        {
            question: " Automatic type conversion is possible in which of the possible cases?",
            options: ["Byte to int", "Int to Long", "Long to int", "Short to int"],
            answer: 2
        },
        {
            question: "Which of the following option leads to the portability and security of Java?",
            options: ["Bytecode is executed by JVM", "The applet makes the java code secure and portable", "Use of exception handling", "Dynamic binding between objects"],
            answer: 0
        },
        {
            question: "---- is used to find and fix bugs in the java programs.",
            options: ["JVM", "JRE", "JDK", "JDB"],
            answer: 3
        },
        {
            question: "Which of the following is not a Java feature?",
            options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic"],
            answer: 1
        },
        {
            question: "What does JVM stand for?",
            options: ["Java Variable Machine", "Java Virtual Machine", "Java Video Machine", "Java Visual Machine"],
            answer: 1
        },
    ],
    WebTechnologies: [
        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["<link>", "<href>", "<a>", "<hyperlink>"],
            answer: 2
        },
        {
            question: "Which of the following is not a web component element?",
            options: ["<shadow>", "<content>", "<menu>", "<element>"],
            answer: 2
        },
        {
            question: "Which HTML element is used for the largest heading?",
            options: ["<h1>", "<h6>", "<header>", "<heading>"],
            answer: 0
        },
        {
            question: "CSS stands for?",
            options: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
            answer: 1
        },
        {
            question: "What does 'DOM' stand for?",
            options: ["Document Object Model", "Document Object Module", "Document Over Model", "Document Output Model"],
            answer: 0
        },
    ]
};

let selectedQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 15;
let userAnswers = []; 


function startQuiz(quizName) {
    localStorage.setItem("selectedQuiz", quizName); 

    window.location.href = "quiz.html"; 
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function loadQuizData() {
    const quizName = localStorage.getItem("selectedQuiz");
    if (!quizName || !quizzes[quizName]) {
        alert("Quiz data not found! Redirecting to homepage.");
        window.location.href = "index.html";
        return;
    }

    selectedQuiz = quizzes[quizName];


    shuffleArray(selectedQuiz);

    currentQuestionIndex = 0;
    score = 0;
    userAnswers = []; 
    loadQuestion();
}


function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 15;
    document.getElementById("time-left").textContent = timeLeft;

    const question = selectedQuiz[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;

    const optionsContainer = document.getElementById("options-container");
    Array.from(optionsContainer.children).forEach((btn, index) => {
        btn.textContent = question.options[index];
        btn.classList.remove("selected"); 
        btn.disabled = false; 
        btn.onclick = () => selectOption(index); 
    });

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}


function selectOption(index) {
    const optionsContainer = document.getElementById("options-container");

    userAnswers[currentQuestionIndex] = index;


    Array.from(optionsContainer.children).forEach((btn) => {
        btn.classList.remove("selected");
        btn.disabled = true; 
    });

  
    const selectedButton = optionsContainer.children[index];
    selectedButton.classList.add("selected"); 

    const question = selectedQuiz[currentQuestionIndex];
    if (index === question.answer) score++; 
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}


function showResult() {
    clearInterval(timerInterval);
    document.getElementById("question-text").classList.add("hidden");
    document.getElementById("options-container").classList.add("hidden");
    document.getElementById("navigation").classList.add("hidden");

    const resultContainer = document.getElementById("result");
    resultContainer.classList.remove("hidden");
    document.getElementById("score").textContent = `${score} / ${selectedQuiz.length}`;


    const highScoreKey = `${localStorage.getItem("selectedQuiz")}-highScore`;
    const highScore = localStorage.getItem(highScoreKey) || 0;
    if (score > highScore) {
        localStorage.setItem(highScoreKey, score);
    }
    document.getElementById("high-score").textContent = localStorage.getItem(highScoreKey);

    const summaryContainer = document.createElement("div");
    summaryContainer.classList.add("summary");
    
    selectedQuiz.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question-summary");

        const userAnswer = userAnswers[index];
        const correctAnswer = question.answer;

        questionElement.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <p><strong>Your Answer:</strong> ${question.options[userAnswer]} ${userAnswer === correctAnswer ? '✔️' : '❌'}</p>
            <p><strong>Correct Answer:</strong> ${question.options[correctAnswer]}</p>
            <p><strong>Marks:</strong> ${userAnswer === correctAnswer ? '1' : '0'}</p>
        `;

        summaryContainer.appendChild(questionElement);
    });

    resultContainer.appendChild(summaryContainer);
}


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 15;

    document.getElementById("result").classList.add("hidden");
    document.getElementById("question-text").classList.remove("hidden");
    document.getElementById("options-container").classList.remove("hidden");
    document.getElementById("navigation").classList.remove("hidden");

    document.getElementById("progress").style.width = '0%';

    
    shuffleArray(selectedQuiz);

    loadQuestion();
}
