const questions = [
    {
        question: "Qual destes é um dispositivo de entrada?",
        answer: [
            {id: 1, text: "Mouse", correct: true},
            {id: 2, text: "Impressora", correct: false},
            {id: 3, text: "Monitor", correct: false},
            {id: 4, text: "Caixa de som", correct: false}
        ]
    },

    {
        question: "Qual programa é usado para criar planilhas eletrônicas?",
        answer: [
            {id: 1, text: "Word", correct: false},
            {id: 2, text: "PowerPoint", correct: false},
            {id: 3, text: "Excel", correct: true},
            {id: 4, text: "Paint", correct: false}
        ]
    },

    {
        question: "Qual é o “cérebro” do computador?",
        answer: [
            {id: 1, text: "HD", correct: false},
            {id: 2, text: "CPU", correct: true},
            {id: 3, text: "Teclado", correct: false},
            {id: 4, text: "Placa de vídeo", correct: false}
        ]
    },

    {
        question: "Qual destes é um dispositivo de saída?",
        answer: [
            {id: 1, text: "Teclado", correct: false},
            {id: 2, text: "Microfone", correct: false},
            {id: 3, text: "Monitor", correct: true},
            {id: 4, text: "Mouse", correct: false}
        ]
    },

    {
        question: "Qual destes serve para armazenar arquivos?",
        answer: [
            {id: 1, text: "Pen drive", correct: true},
            {id: 2, text: "Impressora", correct: false},
            {id: 3, text: "Caixa de som", correct: false},
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