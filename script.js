const quizData = [
    {
        question: 'What does CSS stand for?',
        a: 'Computer Style Sheets',
        b: 'Creative Style Sheets',
        c: 'Cascading Style Sheets',
        d: 'Colorful Style Sheets',
        correct: 'c'
    }, {
        question: 'Which HTML tag is used to define an internal style sheet?',
        a: '<style>',
        b: '<script>',
        c: '<headStyle>',
        d: '<css>',
        correct: 'a'
    }, {
        question: 'Which one of the following is not a keyword in JavaScript?',
        a: 'if',
        b: 'with',
        c: 'debugger',
        d: 'use strict',
        correct: 'd'
    }, {
        question: 'Which property is used to change the background color?',
        a: 'color',
        b: 'bgcolor',
        c: 'background-color',
        d: 'bgColor',
        correct: 'c'
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