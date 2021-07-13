const quizData = [
    {
        question: 'Which type of language JavaScript is',
        a: 'Object-Oriented',
        b: 'Object-Based',
        c: 'Assembly-language',
        d: 'High-level',
        correct: 'b'
    }, {
        question: 'The "function" and "var" are known as:',
        a: 'Keywords',
        b: 'Data types',
        c: 'Declaration statements',
        d: 'Prototypes',
        correct: 'c'
    }, {
        question: 'Which one of the following is not a keyword:',
        a: 'if',
        b: 'with',
        c: 'debugger',
        d: 'use strict',
        correct: 'd'
    }, {
        question: 'If a function which does not return a value is known as',
        a: 'Static function',
        b: 'Procedures',
        c: 'Method',
        d: 'Dynamic function',
        correct: 'd'
    }
];

const quiz = document.getElementById('quiz');
const answerElement = document.querySelectorAll('input[type=radio]');
const questionElement = document.getElementById("question");
const option_A = document.getElementById("option_A");
const option_B = document.getElementById("option_B");
const option_C = document.getElementById("option_C");
const option_D = document.getElementById("option_D");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let answer = undefined;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    option_A.innerText = currentQuizData.a;
    option_B.innerText = currentQuizData.b;
    option_C.innerText = currentQuizData.c;
    option_D.innerText = currentQuizData.d;
}

loadQuiz();

function getSelected() {
    answerElement.forEach((answerElement) => {
        if(answerElement.checked) {
            answer = answerElement.id;
            answerElement.checked = false;
        }
    });
    return undefined;
}

submitButton.addEventListener('click', () => {
    getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz<quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score} out of ${quizData.length} questions correctly</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }else {
        alert("Please choose your option");
    }
});