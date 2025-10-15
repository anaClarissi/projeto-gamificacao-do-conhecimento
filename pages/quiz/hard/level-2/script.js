const questions = [
    {
        question: "O que é cloud computing (computação em nuvem)?",
        answer: [
            {id: 1, text: "Uso de servidores remotos acessados via internet", correct: true},
            {id: 2, text: "Instalação de softwares offline", correct: false},
            {id: 3, text: "Armazenamento apenas em HDs físicos", correct: false},
            {id: 4, text: "Criação de programas de edição de vídeo", correct: false}
        ]
    },

    {
        question: "O que é uma chave primária em banco de dados?",
        answer: [
            {id: 1, text: "Um campo que identifica unicamente cada registro", correct: true},
            {id: 2, text: "Um arquivo temporário", correct: false},
            {id: 3, text: "Um backup de dados", correct: false},
            {id: 4, text: "Um programa de segurança", correct: false}
        ]
    },

    {
        question: "O que é um script em programação?",
        answer: [
            {id: 1, text: "Um programa que executa tarefas automaticamente", correct: true},
            {id: 2, text: "Um tipo de hardware", correct: false},
            {id: 3, text: "Um arquivo de imagem", correct: false},
            {id: 4, text: "Um antivírus", correct: false}
        ]
    },

    {
        question: "O que é autenticação de dois fatores?",
        answer: [
            {id: 1, text: "Uma camada extra de segurança pedindo duas confirmações", correct: true},
            {id: 2, text: "Um backup de arquivos duplo", correct: false},
            {id: 3, text: "Um tipo de antivírus avançado", correct: false},
            {id: 4, text: "Uma rede Wi-Fi segura", correct: false}
        ]
    },

    {
        question: "O que é um endpoint em redes?",
        answer: [
            {id: 1, text: "Um dispositivo final conectado à rede", correct: true},
            {id: 2, text: "Um servidor de backup", correct: false},
            {id: 3, text: "Um tipo de firewall", correct: false},
            {id: 4, text: "Um antivírus online", correct: false}
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