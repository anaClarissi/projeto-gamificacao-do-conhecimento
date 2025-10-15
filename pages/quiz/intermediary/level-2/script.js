const questions = [
    {
        question: "O que é uma rede de computadores?",
        answer: [
            {id: 1, text: "Um conjunto de computadores conectados entre si", correct: true},
            {id: 2, text: "Um programa para editar imagens", correct: false},
            {id: 3, text: "Um dispositivo de entrada", correct: false},
            {id: 4, text: "Um tipo de vírus", correct: false}
        ]
    },

    {
        question: "Qual é a função de um roteador?",
        answer: [
            {id: 1, text: "Distribuir a conexão de internet entre dispositivos", correct: true},
            {id: 2, text: "Aumentar a memória RAM", correct: false},
            {id: 3, text: "Armazenar arquivos", correct: false},
            {id: 4, text: "Editar vídeos", correct: false}
        ]
    },

    {
        question: "Qual destas linguagens é usada principalmente para criação de páginas web?",
        answer: [
            {id: 1, text: "HTML", correct: true},
            {id: 2, text: "Python", correct: false},
            {id: 3, text: "C#", correct: false},
            {id: 4, text: "SQL", correct: false}
        ]
    },

    {
        question: "O que é um backup?",
        answer: [
            {id: 1, text: "Cópia de segurança de arquivos e dados", correct: true},
            {id: 2, text: "Programa que protege contra vírus", correct: false},
            {id: 3, text: "Dispositivo de entrada", correct: false},
            {id: 4, text: "Software de edição de planilhas", correct: false}
        ]
    },

    {
        question: "Qual é a função de um firewall?",
        answer: [
            {id: 1, text: "Controlar e proteger o tráfego de rede", correct: true},
            {id: 2, text: "Aumentar a velocidade do processador", correct: false},
            {id: 3, text: "Gerar gráficos em planilhas", correct: false},
            {id: 4, text: "Editar imagens", correct: false}
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