const questions = [
    {
        question: "O que é pentest (teste de invasão)?",
        answer: [
            {id: 1, text: "Teste de segurança que simula ataques para identificar vulnerabilidades", correct: true},
            {id: 2, text: "Um antivírus avançado", correct: false},
            {id: 3, text: "Um servidor web", correct: false},
            {id: 4, text: "Um software de backup", correct: false}
        ]
    },

    {
        question: "O que é um certificado SSL?",
        answer: [
            {id: 1, text: "Um protocolo que garante comunicação segura entre site e usuário", correct: true},
            {id: 2, text: "Um tipo de firewall", correct: false},
            {id: 3, text: "Um backup de dados criptografado", correct: false},
            {id: 4, text: "Uma linguagem de programação", correct: false}
        ]
    },

    {
        question: "O que significa HTTPS?",
        answer: [
            {id: 1, text: "HyperText Transfer Protocol Secure", correct: true},
            {id: 2, text: "HyperText Transmission Protocol Standard", correct: false},
            {id: 3, text: "Hyper Transfer Text Protocol Simple", correct: false},
            {id: 4, text: "High Transfer Text Protocol Secure", correct: false}
        ]
    },

    {
        question: "O que é um ataque de phishing?",
        answer: [
            {id: 1, text: "Tentativa de roubar informações através de engano", correct: true},
            {id: 2, text: "Um backup automático", correct: false},
            {id: 3, text: "Um firewall avançado", correct: false},
            {id: 4, text: "Uma ferramenta de edição de rede", correct: false}
        ]
    },

    {
        question: "O que é um endpoint seguro?",
        answer: [
            {id: 1, text: "Um dispositivo protegido por antivírus e políticas de segurança", correct: true},
            {id: 2, text: "Um servidor sem firewall", correct: false},
            {id: 3, text: "Um roteador simples", correct: false},
            {id: 4, text: "Um arquivo temporário", correct: false}
        ]
    }
];


const elementQuestion = document.querySelector("#questions");

const btnAnswer = document.querySelector("#btn-answers");

const btnNext = document.querySelector("#btn-next");

let positionCurrentQuestion = 0;

let score = 0;

const startQuiz = () => {

    positionCurrentQuestion = 0;
    
    score = 0;

    btnNext.innerHTML = "Próxima";

    showQuestion();

}

const removeBtn = () => {

    btnNext.setAttribute("disabled", "");

    while (btnAnswer.firstChild) {

        btnAnswer.removeChild(btnAnswer.firstChild);

    }

}

const selectAnswer = (e) => {

    const btnClicked = e.target;
    
    const currentQuestion = questions[positionCurrentQuestion];
    
    const selectedAnswer = currentQuestion.answer.find(r => r.id == btnClicked.dataset.id);

    if (selectedAnswer.correct) {

        btnClicked.classList.add("correct");

        score++;

    } else {

        btnClicked.classList.add("incorrect");

    }

    Array.from(btnAnswer.children).forEach(button => {

        button.disabled = true;

    })

    btnNext.removeAttribute("disabled");

}

const showQuestion = () => {

    removeBtn();
    
    let currentQuestion = questions[positionCurrentQuestion];

    let questionText = positionCurrentQuestion + 1;
    
    elementQuestion.innerHTML = `${questionText}. ${currentQuestion.question}`;

    currentQuestion.answer.forEach((answer) => {

        const button = document.createElement("button");

        button.innerHTML = answer.text;

        button.dataset.id = answer.id;

        button.classList.add("btn");

        button.addEventListener("click", selectAnswer)
        
        btnAnswer.appendChild(button);


    });

}

btnNext.addEventListener("click", () => {

    positionCurrentQuestion++;

    if (positionCurrentQuestion < questions.length) {

        showQuestion();

    } else {

        elementQuestion.innerHTML = `Fim do quiz! Você acertou ${score} de ${questions.length} perguntas`;

        btnAnswer.innerHTML = "";

        btnNext.style.display = "none";

    }

});

startQuiz();