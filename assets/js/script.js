function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text"
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    if(password.value.length >= 8){
        alert("Login Successful");
        window.location.replace("quiz.html");
        return false;
    }
    else{    
        alert("Login Failed");

    }
}




let questions = [
    {
        id: 1,
        question: "Which one of these rules are allowed in Kickboxing?",
        answer: "Kicks below the waist",
        option: [
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
        option: [
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
        option: [
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
        option: [
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
        option: [
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
        option: [
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
        option: [
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
        option: [
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
       option: [
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
        option: [
            "Japanese",
            "Chinese",
            "Korean",
            "All of the above"
        ]
    }

];

