
window.addEventListener("load", function(){
  const userDetails = JSON.parse(localStorage.getItem("user_details"))
  console.log(window.location.pathname)
  if(!userDetails?.password && window.location.pathname === '/quiz.html'){
    window.location =  'index.html'
  }

})

function myfunction() {
    var x = document.getElementById("pass");

    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}
function validate() {
  var username = document.getElementById("username")
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    var userDetails = {
     username: username.value,
     password: password.value
    }

    if (password.value.length >= 8) {
        alert("Login Successful");
        localStorage.setItem("user_details", JSON.stringify(userDetails))
        window.location.replace("quiz.html");
        return false;
    }
    else {
        alert("Login Failed");

    }
}
const Data = [
    {
        question: "Which one of these rules are allowed in Kickboxing?",
        a:  "Kicks above the elbow",
        b:  "Throwing punching in chest",
        c:  "Sweeping opponent to the ground",
        d:  "Kicks below the waist",
        correct: "d",
           
        
    },

    {
        
        question: "Where did Kickboxing originate from?",
        a:  "America",
        b:  "Germany",
        c:  "Australia",
        d:  "Southeast Asia",
        correct: "d",
    
    },

    {
        question: "Which one is the benefit of Kickboxing?",
        a:  "More sleep",
        b:  "Hydration",
        c:   "Self-Defense",
        d:  "All of the above",
        correct: "c",

        
    },

    {
        question: "Which of these is not a Kickboxing style?",
        a:   "Muay Thai",
        b: "Firestarter",
        c:   "Full Contact Karate",
        d:   "Savate",
        correct: "b",
        
    },

    {
        question: "Which country does Muay Thai orginates from?",
        a:    "Japan",
        b:   "China",
        c:   "Thailand",
        d:   "South Korea",
        correct: "c",
    },

    {
        question: "Who is the 2022 Heavyweight UFC Champion?",
        a:   "Francis Ngannou",
        b:   "Yoel Romero",
        c:   "Colby Covington",
        d:   "Kamaro Usman",
        correct: "a",

    
    },

    {
        question: "How many divisions are in the UFC?",
        a:    "8",
        b:    "15",
        c:   "11",
        d:   "12",
        correct: "d",

        
    },

    {
        question: "When year was the UFC founded?",
        a:    "1993",
        b:   "1972",
        c:   "1985",
        d:    "1991",
        correct: "a",
        
    },

    {
       question: "Which one is considered a mixed martial arts (MMA)?",
        a:   "Taekwondo",
        b:   "Karate",
        c:   "Hybrid combat sport",
        d:   "Judo",
        correct: "c",
    
    },

    {
        question: "Which is the main category of Martial arts?",
        a:    "Japanese",
        b:   "Chinese",
        c:    "Korean",
        d:    "All of the above",
        correct: "d",
    
    },

]

  const grabId = (idName) => {
    
    const ElementId = document.getElementById(idName);
    console.log(ElementId, "<==idname")
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
  
  let currentQuize = 0;
  let score = 0;
  
  loadQuize();
  function loadQuize() {
  
    unCheckAnswer();
    let nextOption = Data[currentQuize];
    console.log(nextOption, "next")
    question.innerText = nextOption.question;
    option1.innerText = nextOption.a;
    option2.innerText = nextOption.b;
    option3.innerText = nextOption.c;
    option4.innerText = nextOption.d;
    nextBtn.addEventListener("click", nextQuestion);
    prevBtn.addEventListener("click", PreviousQuestion);
  }
  function nextQuestion() {
    const answer = getValue();
    console.log(quiz, "<===quiZ")
    if (answer) {
      if (answer === Data[currentQuize].correct) {
        score++;
      }
      currentQuize++;
      if (currentQuize < Data.length) {
        loadQuize();
      } else if (score === Data.length) {
        console.log("you reached")
        quiz.innerHTML = `<h1> Congratulations 👏👏 <br/>You scored ${score}/${Data.length}</h1>`;
      } else {
        quiz.innerHTML = `<h1> You scored ${score}/${Data.length}`;
      }
    }
  }
  
  function PreviousQuestion() {
    if (currentQuize.valueOf() === 0) {
      alert("Can't go back anymore");
    } else {
      initialQuize--;
      loadQuize();
    }
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



  // grab username & password, store to local storage as an object
  //ex: {username: "balh", password: "fjkfjfgjk"}
  //conditionally render the game.html ===> if username/password doesn't exist in LS, 
  // redirect to homepage

  //validate your inpurt fields for white spaces

