const questions = [
    {
        question: "O que é um sistema operacional?",
        answer: [
            {id: 1, text: "Um programa que gerencia recursos do computador", correct: true},
            {id: 2, text: "Um tipo de hardware", correct: false},
            {id: 3, text: "Um antivírus", correct: false},
            {id: 4, text: "Uma planilha eletrônica", correct: false}
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
        question: "Qual é a função de uma placa de vídeo?",
        answer: [
            {id: 1, text: "Gerar imagens e gráficos para o monitor", correct: true},
            {id: 2, text: "Armazenar dados permanentemente", correct: false},
            {id: 3, text: "Proteger o computador contra vírus", correct: false},
            {id: 4, text: "Controlar a internet", correct: false}
        ]
    },

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
        question: "Qual dispositivo permite entrada e saída de dados simultaneamente?",
        answer: [
            {id: 1, text: "Touchscreen (Tela sensível ao toque)", correct: true},
            {id: 2, text: "Mouse", correct: false},
            {id: 3, text: "Teclado", correct: false},
            {id: 4, text: "Scanner", correct: false}
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