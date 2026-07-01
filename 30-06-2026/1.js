const quizData = [
{
question: "Which company developed JavaScript?",
options: ["Netscape","Microsoft","Google","Oracle"],
answer: "Netscape"
},
{
question: "Which keyword is used to declare a variable that cannot be reassigned?",
options: ["var","let","const","set"],
answer: "const"
},
{
question: "Which comment is used for multiple lines?",
options: ["// Comment","/* Comment */","<!-- Comment -->","# Comment"],
answer: "/* Comment */"
},
{
question: "Which method converts JSON into an object?",
options: ["JSON.parse()","JSON.stringify()","JSON.convert()","JSON.object()"],
answer: "JSON.parse()"
},
{
question: "Which operator is used for strict equality?",
options: ["===","==","=","!="],
answer: "==="
},
{
question: "Which function prints data in the console?",
options: ["console.log()","print()","echo()","display()"],
answer: "console.log()"
},
{
question: "Which keyword creates a constant?",
options: ["const","let","var","fixed"],
answer: "const"
},
{
question: "Which event occurs when a button is clicked?",
options: ["click","hover","submit","change"],
answer: "click"
},
{
question: "Which loop runs at least once?",
options: ["do...while","while","for","foreach"],
answer: "do...while"
},
{
question: "Which keyword declares a block-scoped variable?",
options: ["let","var","int","define"],
answer: "let"
}
];
// Get HTML Elements
var welcomeScreen = document.getElementById("welcomeScreen");
var quizScreen = document.getElementById("quizScreen");
var resultScreen = document.getElementById("resultScreen");

var startBtn = document.getElementById("startBtn");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var restartBtn = document.getElementById("restartBtn");

var question = document.getElementById("question");
var answerButtons = document.getElementById("answerButtons");

var currentQuestion = document.getElementById("currentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var progress = document.getElementById("progress");

var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var score = document.getElementById("score");
var percentage = document.getElementById("percentage");

// Variables
var currentIndex = 0;
var scoreCount = 0;
var selectedAnswers = [];

totalQuestion.innerHTML = quizData.length;

// Start Quiz
startBtn.onclick = function () {

    welcomeScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
};

// Show Question
function showQuestion() {

    question.innerHTML = quizData[currentIndex].question;

    currentQuestion.innerHTML = currentIndex + 1;

    progress.style.width = ((currentIndex + 1) * 100 / quizData.length) + "%";

    answerButtons.innerHTML = "";

    for (var i = 0; i < quizData[currentIndex].options.length; i++) {

        var button = document.createElement("button");

        button.innerHTML = quizData[currentIndex].options[i];

        button.className = "answer-btn";

        if (selectedAnswers[currentIndex] == i) {
            button.classList.add("selected");
        }

        button.onclick = selectAnswer;

        answerButtons.appendChild(button);
    }
}

// Select Answer
function selectAnswer() {

    var buttons = document.getElementsByClassName("answer-btn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }

    this.classList.add("selected");

    var buttons = document.getElementsByClassName("answer-btn");

    for (var i = 0; i < buttons.length; i++) {

        if (buttons[i] == this) {

            selectedAnswers[currentIndex] = i;

        }

    }
}

// Next Button
nextBtn.onclick = function () {

    if (selectedAnswers[currentIndex] == undefined) {

        alert("Please select an answer.");

        return;
    }

    if (currentIndex < quizData.length - 1) {

        currentIndex++;

        showQuestion();

    } else {

        showResult();

    }

};

// Previous Button
prevBtn.onclick = function () {

    if (currentIndex > 0) {

        currentIndex--;

        showQuestion();

    }

};

// Show Result
function showResult() {

    scoreCount = 0;

    for (var i = 0; i < quizData.length; i++) {

        if (selectedAnswers[i] == quizData[i].answer) {

            scoreCount++;

        }

    }

    quizScreen.classList.remove("active");

    resultScreen.classList.add("active");

    correct.innerHTML = scoreCount;

    wrong.innerHTML = quizData.length - scoreCount;

    score.innerHTML = scoreCount + "/" + quizData.length;

    var percent = Math.round((scoreCount * 100) / quizData.length);

    percentage.innerHTML = percent + "%";


}

// Restart Quiz
restartBtn.onclick = function () {

    currentIndex = 0;

    scoreCount = 0;

    selectedAnswers = [];

    resultScreen.classList.remove("active");

    welcomeScreen.classList.add("active");
};