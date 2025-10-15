const questions = [
    {
        question: "O que significa a sigla CPU?",
        answer: [
            {id: 1, text: "Central Processing Unit", correct: true},
            {id: 2, text: "Computer Program Unit", correct: false},
            {id: 3, text: "Control Power Unit", correct: false},
            {id: 4, text: "Central Program Unit", correct: false}
        ]
    },

    {
        question: "Qual é a função principal da memória RAM?",
        answer: [
            {id: 1, text: "Armazenar arquivos permanentemente", correct: false},
            {id: 2, text: "Executar programas e guardar dados temporários", correct: true},
            {id: 3, text: "Proteger o computador contra vírus", correct: false},
            {id: 4, text: "Aumentar a velocidade da internet", correct: false}
        ]
    },

    {
        question: "Qual destas extensões é de uma imagem?",
        answer: [
            {id: 1, text: ".docx", correct: false},
            {id: 2, text: ".jpg", correct: true},
            {id: 3, text: ".xlsx", correct: false},
            {id: 4, text: ".mp3", correct: false}
        ]
    },

    {
        question: "Qual programa é usado para criar apresentações?",
        answer: [
            {id: 1, text: "Excel", correct: false},
            {id: 2, text: "Word", correct: false},
            {id: 3, text: "PowerPoint", correct: true},
            {id: 4, text: "Paint", correct: false}
        ]
    },

    {
        question: "Qual destes é um dispositivo de entrada e saída ao mesmo tempo?",
        answer: [
            {id: 1, text: "Impressora", correct: false},
            {id: 2, text: "Monitor", correct: false},
            {id: 3, text: "Touchscreen (Tela sensível ao toque)", correct: true},
            {id: 4, text: "Mouse", correct: false}
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