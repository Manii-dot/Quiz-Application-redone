//DOM var
var beginButton = document.getElementById("begin");
var timerDisplay = document.getElementById("timer");
var beginCard = document.getElementById("card");
var questionEl = document.getElementById("allQuestions");
var lastDiv = document.getElementById("lastPart");
var theAnswers = document.getElementById("answers");
var quizScore = document.getElementById("endScore");
var submiting = document.getElementById("submit");
var scoreTab = document.getElementById("scoretable");
var highScoresTab = document.getElementById("highScores");
var clearScore = document.getElementById("clear-score");
var theScoresLink = document.getElementById("scoreslink");
var returnButton = document.getElementById("returnBtn");

var bestScoresCache = JSON.parse(localStorage.getItem("bestScoreDisplay")) || [];

//Countdown
var timeLeft = 60;


//Question and answers Array
var qI = 0;
var bestScoreDisplay = {name: "", score: 0};

var allQuestions = [
    //Q1
    {
        question: "Why so JavaScript and Java have similar name?",
        answers: ["They both originated on the island of Java", "JavaScript's syntax is loosely based on Java's", "Both A and B", "None of the above"],
        correctAnswer: "JavaScript's syntax is loosely based on Java's",
    },
    // Q2
    {
        question: "What type of language is JavaScript?",
        answers: ["Object-Oriented", "Object-Based", "Assembly-languageHigh-level", "None of the above!"],
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
function startQuiz() {
    beginCard.setAttribute("class", "hiding");
    questionEl.removeAttribute("class");
    highScoresTab.setAttribute("class", "hiding");
    countdownTime();
    nextQuestion();
}

//Timer countdown start
function countdownTime() {
    var intervalSet = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0 && qI !== allQuestions.length) {
            clearInterval(intervalSet);
            quizOver();
        }
    }, 1000);
};


// Start Next question
function nextQuestion() {
    var actualQuestion = allQuestions[qI];
    var showQuestions = document.getElementById("QUESTIONS"); 
    showQuestions.textContent = actualQuestion.question;

    theAnswers.innerHTML = "";

    actualQuestion.answers.forEach(function (answer) {
        var answerbtn = document.createElement("button");
        answerbtn.setAttribute("class", "option");
        answerbtn.setAttribute("value", answer);
        answerbtn.textContent = answer;
        answerbtn.onclick = inspectAnswer;
        theAnswers.appendChild(answerbtn);
    })
}

//Is it the right the answer
function inspectAnswer() {
    console.log(this.value);

    if (this.value !== allQuestions[qI].correctAnswer) {
        timeLeft -= 10;
        alert("Wrong Answer!");
    } else {
        alert("That was Correct!");
    }
    qI++;
    if (qI == allQuestions.length) {
        quizOver();
    } else {
        nextQuestion();
    }
}


//Quiz complete/Time is at zero
function quizOver() {

    var endScore = timeLeft;

    questionEl.setAttribute("class", "hiding");
    lastDiv.removeAttribute("class");
    timerDisplay.setAttribute("class", "hiding");

    quizScore.textContent = endScore;

    submiting.addEventListener("click", function () {

        yourInitials = document.querySelector("#initials").value;
        console.log(yourInitials);


        var yourScore = {
            initials: yourInitials,
            score: endScore
        };

        bestScoresCache.push(yourScore);
        bestScoresCache.sort(differentiate);
        localStorage.setItem("bestScoreDisplay", JSON.stringify(bestScoresCache));

        lastDiv.setAttribute("class", "hiding");
        highScoresTab.removeAttribute("class");


// High score to lowest one
for (var i = 0; i < bestScoresCache.length; i++) { 
    var  dataRow = document.createElement("tr"); 
    var dataCell = document.createElement("td"); 
    dataCell.textContent = (i + 1) + ". " + bestScoresCache[i].initials + " " + bestScoresCache[i].score; 
    dataRow.appendChild(dataCell);
    scoreTab.appendChild(dataRow);
}

})
}

function differentiate(user1, user2) { 
return user2.score - user1.score;
}

function clearStorage() { 
localStorage.clear();
}

function theScores() {
    beginCard.setAttribute("class", "hiding");
    questionEl.setAttribute("class", "hiding");
    lastDiv.setAttribute("class", "hiding");
    highScoresTab.removeAttribute("class");
    timerDisplay.setAttribute("class", "hiding");
}

function goBack() {
    location.reload();
}


// All event listeners

beginButton.addEventListener("click", startQuiz);

clearScore.addEventListener("click", clearStorage);

theScoresLink.addEventListener("click", theScores);

returnButton.addEventListener("click", goBack);