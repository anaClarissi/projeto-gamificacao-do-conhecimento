const questions = [
    {
        question: "O que é um firewall?",
        answer: [
            {id: 1, text: "Um sistema que monitora e controla o tráfego de rede", correct: true},
            {id: 2, text: "Um antivírus gratuito", correct: false},
            {id: 3, text: "Um programa de edição de texto", correct: false},
            {id: 4, text: "Um dispositivo de armazenamento", correct: false}
        ]
    },

    {
        question: "O que é virtualização em TI?",
        answer: [
            {id: 1, text: "Executar vários sistemas operacionais em um mesmo hardware", correct: true},
            {id: 2, text: "Armazenar arquivos na nuvem", correct: false},
            {id: 3, text: "Aumentar a memória RAM", correct: false},
            {id: 4, text: "Conectar computadores via Bluetooth", correct: false}
        ]
    },

    {
        question: "Qual é a função de um servidor web?",
        answer: [
            {id: 1, text: "Armazenar e entregar páginas web para usuários", correct: true},
            {id: 2, text: "Editar imagens na internet", correct: false},
            {id: 3, text: "Gerar gráficos em planilhas", correct: false},
            {id: 4, text: "Proteger contra vírus", correct: false}
        ]
    },

    {
        question: "Qual é a função de um roteador?",
        answer: [
            {id: 1, text: "Distribuir a conexão de internet entre dispositivos", correct: true},
            {id: 2, text: "Aumentar a memória RAM", correct: false},
            {id: 3, text: "Controlar impressoras", correct: false},
            {id: 4, text: "Editar vídeos online", correct: false}
        ]
    },

    {
        question: "O que é criptografia?",
        answer: [
            {id: 1, text: "Transformar dados em códigos para proteção", correct: true},
            {id: 2, text: "Compactar arquivos", correct: false},
            {id: 3, text: "Editar documentos de texto", correct: false},
            {id: 4, text: "Instalar programas automaticamente", correct: false}
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