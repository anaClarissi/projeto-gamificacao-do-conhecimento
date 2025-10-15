const questions = [
    {
        question: "O que é computação em nuvem (Cloud Computing)?",
        answer: [
            {id: 1, text: "Uso de servidores remotos acessados via internet", correct: true},
            {id: 2, text: "Instalação de softwares offline", correct: false},
            {id: 3, text: "Armazenamento apenas em HDs físicos", correct: false},
            {id: 4, text: "Criação de programas de edição de vídeo", correct: false}
        ]
    },

    {
        question: "Qual destas é uma boa prática de segurança digital?",
        answer: [
            {id: 1, text: "Usar senhas fortes e diferentes para cada conta", correct: true},
            {id: 2, text: "Compartilhar senhas com amigos", correct: false},
            {id: 3, text: "Ignorar atualizações de sistema", correct: false},
            {id: 4, text: "Usar redes Wi-Fi públicas sem proteção", correct: false}
        ]
    },

    {
        question: "Qual é a função de uma chave primária em um banco de dados?",
        answer: [
            {id: 1, text: "Identificar unicamente cada registro", correct: true},
            {id: 2, text: "Armazenar arquivos temporários", correct: false},
            {id: 3, text: "Aumentar a memória RAM", correct: false},
            {id: 4, text: "Editar documentos de texto", correct: false}
        ]
    },

    {
        question: "O que é um script em programação?",
        answer: [
            {id: 1, text: "Um programa que executa tarefas automaticamente", correct: true},
            {id: 2, text: "Um vírus de computador", correct: false},
            {id: 3, text: "Um tipo de hardware", correct: false},
            {id: 4, text: "Um arquivo de imagem", correct: false}
        ]
    },

    {
        question: "Qual é a principal função de um servidor web?",
        answer: [
            {id: 1, text: "Armazenar e entregar páginas web para os usuários", correct: true},
            {id: 2, text: "Gerar gráficos em planilhas", correct: false},
            {id: 3, text: "Editar imagens online", correct: false},
            {id: 4, text: "Aumentar a memória do computador", correct: false}
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