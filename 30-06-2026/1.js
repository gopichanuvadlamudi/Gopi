const questions = [
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

let currentQuestion = 0;
let selectedAnswers = new Array(questions.length).fill(null);

const welcomeScreen = document.getElementById("welcomeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");

startBtn.addEventListener("click", startQuiz);
prevBtn.addEventListener("click", previousQuestion);
nextBtn.addEventListener("click", nextQuestion);
submitBtn.addEventListener("click", submitQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz(){

welcomeScreen.style.display="none";
quizScreen.style.display="block";

showQuestion();

}

function showQuestion(){

const q = questions[currentQuestion];

document.getElementById("questionNumber").innerHTML =
`Question ${currentQuestion+1} of ${questions.length}`;

document.getElementById("progressBar").style.width =
`${((currentQuestion+1)/questions.length)*100}%`;

document.getElementById("question").innerHTML=q.question;

const answers=document.getElementById("answers");

answers.innerHTML="";

q.options.forEach(option=>{

const label=document.createElement("label");

label.className="option";

label.innerHTML=
`<input type="radio" name="answer" value="${option}">
${option}`;

const radio=label.querySelector("input");

if(selectedAnswers[currentQuestion]===option){

radio.checked=true;
label.classList.add("selected");

}

radio.addEventListener("change",function(){

selectedAnswers[currentQuestion]=this.value;

document.querySelectorAll(".option").forEach(opt=>{
opt.classList.remove("selected");
});

label.classList.add("selected");

});

answers.appendChild(label);

});

prevBtn.disabled=currentQuestion===0;

if(currentQuestion===questions.length-1){

nextBtn.style.display="none";
submitBtn.style.display="inline-block";

}else{

nextBtn.style.display="inline-block";
submitBtn.style.display="none";

}

}

function nextQuestion(){

currentQuestion++;

showQuestion();

}

function previousQuestion(){

currentQuestion--;

showQuestion();

}