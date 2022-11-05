let questions = [
    {
        id: 1,
        question: "Which one of these rules are allowed in Kickboxing?",
        answer: "Kicks below the waist",
        options: [
            "Kicks above the elbow",
            "Throwing punching in chest",
            "Sweeping opponent to the ground",
            "Kicks below the waist"
        ]
    },

    {
        id: 2,
        question: "Where did Kickboxing originate from?",
        answer: "Southeast Asia",
        options: [
            "America",
            "Germany",
            "Australia",
            "Southeast Asia"
        ]
    },

    {
        id: 3,
        question: "Which one is the benefit of Kickboxing?",
        answer: "Self-Defense",
        options: [
            "More sleep",
            "Hydration",
            "Self-Defense",
            "All of the above"

        ]
    },

    {
        id: 4,
        question: "Which of these is not a Kickboxing style?",
        answer: "Firestarter",
        options: [
            "Muay Thai",
            "Firestarter",
            "Full Contact Karate",
            "Savate"
        ]
    },

    {
        id: 5,
        question: "Which country does Muay Thai orginates from?",
        answer: "Thailand",
        options: [
            "Japan",
            "China",
            "Thailand",
            "South Korea"
        ]
    },

    {
        id: 6,
        question: "Who is the 2022 Heavyweight UFC Champion?",
        answer: "Francis Ngannou",
        options: [
            "Francis Ngannou",
            "Yoel Romero",
            "Colby Covington",
            "Kamaro Usman"

        ]
    },

    {
        id: 7,
        question: "How many divisions are in the UFC?",
        answer: "12",
        options: [
            "8",
            "15",
            "11",
            "12"

        ]
    },

    {
        id: 8,
        question: "When year was the UFC founded?",
        answer: "1993",
        options: [
            "1993",
            "1972",
            "1985",
            "1991"
        ]
    },

    {
       id: 9,
       question: "Which one is considered a mixed martial arts (MMA)?",
       answer: "Hybrid combat sport",
       options: [
           "Taekwondo",
           "Karate",
           "Hybrid combat sport",
           "Judo"
       ]
    },

    {
        id: 10,
        question: "Which is the main category of Martial arts?",
        answer: "All of the above",
        options: [
            "Japanese",
            "Chinese",
            "Korean",
            "All of the above"
        ]
    }

];

let question_count = 0;

window.onload = function() {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = question[count].options;

    question.innerHTML = `<h2>Q${count + 1}. $(questions[count].question)</h2>
    <ul class="option_group">
    <li class="option">$(first)</li>
    <li class="option">$(second)</li>
    <li class="option">$(third)</li>
    <li class="option">$(fourth)</li>
    </ul>`;
    toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i <option.length; i++){
        option[i].onclick = function() {
            for(let i=0; i< option.length; 1++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}