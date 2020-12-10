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


// Start Next question
function nextQuestion() {
    var actualQuestion = theQuestion[questionIndex];
    var showQuestions = document.getElementById("QT"); // Display question
    showQuestions.textContent = actualQuestion.theQuestion;

    theAnswers.innerHTML = "";

    actualQuestion.answers.forEach(function (allAnswer) {
        var answerbtn = document.createElement("button");
        answerbtn.setAttribute("class", "option");
        answerbtn.setAttribute("value", answer);
        answerbtn.textContent = answer;
        answerbtn.onclick = questionCheck;
        theAnswers.appendChild(answerbtn);
    })
}

//Is it the right the answer
function inspectAnswer() {
    console.log(this.value);

    if (this.value !== questions[qI].correctAnswer) {
        timeLeft -= 10;
        alert("Wrong Answer!");
    } else {
        alert("That was Correct!");
    }
    qI++;
    if (qI == theQuestion.length) {
        quizOver();
    } else {
        nextQuestion();
    }
}


//Quiz complete/Time is at zero
function quizOver() {

    var endResult = timeLeft;

    theQuestionDiv.setAttribute("class", "hiding");
    lastPart.removeAttribute("class");
    timerDisplay.setAttribute("class", "hiding");

    quizScore.textContent = score;

    submiting.addEventListener("click", function () {

        yourInitials = document.querySelector("#initials").value;
        console.log(yourInitials);


        var yourScore = {
            initials: yourInitials,
            score: score
        };

        ArchiveBestScores.push(yourScore);
        ArchiveBestScores.sort(compare);
        localStorage.setItem("BestScoreDisplay", JSON.stringify(ArchiveBestScores));

        ending.setAttribute("class", "hiding");
        highScoresTab.removeAttribute("class");


// High score to lowest one


// All event listeners

