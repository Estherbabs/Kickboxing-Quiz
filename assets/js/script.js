// Login //

const options = document.getElementById("options");
const questionCount = document.getElementById("question-count");
const feedbackText = document.getElementById("feedback-text")

window.addEventListener("load", function () {
  const localStorageName = JSON.parse(localStorage.getItem("username"));
  console.log(localStorageName, "<==ls");
  if (!localStorageName && window.location.pathname === "/quiz.html") {
    window.location.replace("index.html");
  }
});

// This function is for the user to login into the game//
function quit() {
  localStorage.removeItem("username");
  window.location = "index.html";
}

function myfunction() {
  var x = document.getElementById("pass");

  if (x.type === "password") {
    x.type = "text";
    
    alert("Login Successful");
  } else {
    x.type = "password";
  }
}

// This function is to validate the login for username and password//
function validate() {
  var username = document.getElementById("username");
  if (username.value.trim() != "") {
    alert("Login Successful");
    localStorage.setItem("username", JSON.stringify(username.value));
    username.value = ""
    window.location.replace("quiz.html");
    return false;
  } else {
    alert("Login Failed, please enter username longer than 5 char");
  }
}

// Quiz Question //

const Data = [
  {
    id: 1,
    question: "Which one of these rules are allowed in Kickboxing?",
    a: "Kicks above the elbow",
    b: "Throwing punching in chest",
    c: "Sweeping opponent to the ground",
    d: "Kicks below the waist",
    correct: "Kicks below the waist",
  },

  {
    id: 2,
    question: "Where did Kickboxing originate from?",
    a: "America",
    b: "Germany",
    c: "Australia",
    d: "Southeast Asia",
    correct: "Southeast Asia",
  },

  {
    id: 3,
    question: "Which one is the benefit of Kickboxing?",
    a: "More sleep",
    b: "Hydration",
    c: "Self-Defense",
    d: "All of the above",
    correct: "c",
  },

  {
    id: 4,
    question: "Which of these is not a Kickboxing style?",
    a: "Muay Thai",
    b: "Firestarter",
    c: "Full Contact Karate",
    d: "Savate",
    correct: "Firestarter",
  },

  {
    id: 5,
    question: "Which country does Muay Thai orginates from?",
    a: "Japan",
    b: "China",
    c: "Thailand",
    d: "South Korea",
    correct: "Thailand",
  },

  {
    id: 6,
    question: "Who is the 2022 Heavyweight UFC Champion?",
    a: "Francis Ngannou",
    b: "Yoel Romero",
    c: "Colby Covington",
    d: "Kamaro Usman",
    correct: "Francis Ngannou",
  },

  {
    id: 7,
    question: "How many divisions are in the UFC?",
    a: "8",
    b: "15",
    c: "11",
    d: "12",
    correct: "12",
  },

  {
    id: 8,
    question: "When year was the UFC founded?",
    a: "1993",
    b: "1972",
    c: "1985",
    d: "1991",
    correct: "1993",
  },

  {
    id: 9,
    question: "Which one is considered a mixed martial arts (MMA)?",
    a: "Taekwondo",
    b: "Karate",
    c: "Hybrid combat sport",
    d: "Judo",
    correct: "Hybrid combat sport",
  },

  {
    id: 10,
    question: "Which is the main category of Martial arts?",
    a: "Japanese",
    b: "Chinese",
    c: "Korean",
    d: "All of the above",
    correct: "All of the above",
  },
];

// This function is for the progress bar to indicate how many questions answered//
function increaseProgressBar(incVal) {
  const myBar = document.getElementById("myBar");
  myBar.style.backgroundColor = "lime"
  const questionCounter = parseInt(questionCount.innerText);
  const maxQuestions = Data.length;

  myBar.style.width = `${(questionCounter / maxQuestions) * 100}%`;
}





 // Sourced code from a youtuber (CodeWithDarkwa) //
const grabId = (idName) => {
  const ElementId = document.getElementById(idName);
  console.log(ElementId, "<==idname");
  if (ElementId) return ElementId;
  // throw new Error(`cannot find the id ${idName}`);
};
const option1 = grabId("option1");
const option2 = grabId("option2");
const option3 = grabId("option3");
const option4 = grabId("option4");
let nextBtn = grabId("btn-next");
let prevBtn = grabId("btn-prev");

const quiz = grabId("quiz");
const question = document.querySelector("h3");
const answers = document.querySelectorAll(".answer");

//let currentQuize = 0;
let score = 0;

nextBtn.disabled = true;

loadQuize(0);

// function to for next quiz question//
function loadQuize(currentQuize) {
  unCheckAnswer();
  let nextOption = Data[currentQuize];

  options.setAttribute("data-id", nextOption.id);

  question.innerText = nextOption.question;
  option1.innerText = nextOption.a;
  option2.innerText = nextOption.b;
  option3.innerText = nextOption.c;
  option4.innerText = nextOption.d;
}

function getValue() {
  let value = undefined;
  answers.forEach((answer) => {
    if (answer.checked) {
      value = answer.id;
    }
  });
  return value;
}

function unCheckAnswer() {
  answers.forEach((answer) => {
    answer.checked = false;
  });
}


const btn = document.querySelector(".btn");



nextBtn.addEventListener("click", () => {
  nextBtn.disabled = true;
  option1.disabled = false;
  option2.disabled = false;
  option3.disabled = false;
  option4.disabled = false;
  loadQuize(parseInt(questionCount.innerText - 1));
  if(questionCount.innerText == Data.length) {
    feedback.style.display = 'block'
  }
});


//This code is to indicate the if the user chose the correct or incorrect answers//
function checkAnswer(e) {
  var dataId = options.getAttribute("data-id");
  const data = Data.find((x) => x.id == dataId);
  const emojiContainer = document.getElementById("emoji");
  const selectedOption = e.target.innerText;
  let correctAnswers = 0;
  
  option1.disabled = true;
  option2.disabled = true;
  option3.disabled = true;
  option4.disabled = true;
  questionCount.innerText = parseInt(questionCount.innerText) + 1
  increaseProgressBar()



  if (selectedOption === data.correct) {
    //alert("correct!")
    emojiContainer.innerHTML = '<img src="/assets/images/smiley-emoji.png" alt="happy">';
    feedbackText.innerText = parseInt(feedbackText.innerText) + 1
  } else {
    console.log(options.childNodes, "wrong");
    emojiContainer.innerHTML = '<img src="/assets/images/sad-face.png" alt="sad">';

  }
  nextBtn.disabled = false;

  console.log(options.childNodes, "<===data");
}