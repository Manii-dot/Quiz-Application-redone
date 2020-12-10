//DOM var
var beginButton = document.getElementById("begin");
var timerDisplay = document.getElementById("timer");
var beginCard = document.getElementById("card");
var theQuestionDiv = document.getElementById("theQuestion");
var lastPart = document.getElementById("lastPart");
var theAnswers = document.getElementById("answers");
var quizScore = document.getElementById("score");
var submiting = document.getElementById("submit");
var scoreTab = document.getElementById("scoretable");
var highScoresTab = document.getElementById("highScores");
var clearScore = document.getElementById("clear");
var theScoresLink = document.getElementById("scoreslink");
var returnButton = document.getElementById("returnBtn");

var bestScoresCache = JSON.parse(localStorage.getItem("bestScoreDisplay")) || [];

//Countdown
var timeLeft = 60;


//Question and answers Array
var qI = 0;
var bestScoreDisplay = {name: "", score: 0};

var questions = [
    //Q1
    {
        question: "Why so JavaScript and Java have similar name?",
        answers: ["They both originated on the island of Java", "JavaScript's syntax is loosely based on Java's", "Both A and B", "None of the above"],
        correctAnswer: "JavaScript's syntax is loosely based on Java's",
    },
    // Q2
    {
        question: "Which type of JavaScript language is ___",
        answers: ["Object-Oriented", "Object-Based", "Assembly-languageHigh-level"],
        correctAnswer: "Object-Based",

    },
    //Q3
    {
        question: "The function and var are known as:",
        answers: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
        correctAnswer: "Declaration statements"
    },
    // Q4
    {
        question: "Which of the following number object function returns the value of the number?", 
        answers: ["toString", "valueOf", "toLocaleString", "toPrecision"],
        correctAnswer: "valueOf",
    }
]

//Start the quiz 
function quizStart() {
    beginCard.setAttribute("class", "hiding");
    theQuestionDiv.removeAttribute("class");
    highScoresTab.setAttribute("class", "hiding");
    countdown();
    nextQ();
}

//Timer countdown start
function countdownTime() {
    var intervalSet = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0 && qI !== theQuestion.length) {
            clearInterval(intervalSet);
            quizOver();
        }
    }, 1000);
};


//Next question


//Is it the right the answer



//Quiz completed/Time is at zero


// High score to lowest one


// All event listeners

