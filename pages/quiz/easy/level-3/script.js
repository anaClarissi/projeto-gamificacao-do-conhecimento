const questions = [
    {
        question: "O que significa a sigla URL?",
        answer: [
            {id: 1, text: "Uniform Resource Locator", correct: true},
            {id: 2, text: "User Random Link", correct: false},
            {id: 3, text: "Universal Resource Language", correct: false},
            {id: 4, text: "Unique Reference Link", correct: false}
        ]
    },

    {
        question: "Qual destes programas é usado para edição de imagens?",
        answer: [
            {id: 1, text: "Word", correct: false},
            {id: 2, text: "Paint", correct: true},
            {id: 3, text: "Excel", correct: false},
            {id: 4, text: "PowerPoint", correct: false}
        ]
    },

    {
        question: "Qual é a função de um antivírus?",
        answer: [
            {id: 1, text: "Proteger e remover softwares maliciosos", correct: true},
            {id: 2, text: "Aumentar a velocidade do processador", correct: false},
            {id: 3, text: "Editar documentos de texto", correct: false},
            {id: 4, text: "Gerar gráficos em planilhas", correct: false}
        ]
    },

    {
        question: "Qual dispositivo é usado para digitalizar documentos?",
        answer: [
            {id: 1, text: "Scanner", correct: true},
            {id: 2, text: "Mouse", correct: false},
            {id: 3, text: "Teclado", correct: false},
            {id: 4, text: "Monitor", correct: false}
        ]
    },

    {
        question: "O que é um navegador de internet?",
        answer: [
            {id: 1, text: "Um programa para acessar sites na web", correct: true},
            {id: 2, text: "Um hardware de rede", correct: false},
            {id: 3, text: "Um antivírus online", correct: false},
            {id: 4, text: "Um editor de vídeos", correct: false}
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