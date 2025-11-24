// Quizz Eazy
const questionsEazyLevel1 = [
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

const questionsEazyLevel2 = [
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

const questionsEazyLevel3 = [
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

// Quizz Intermediary

const questionsIntermediaryLevel1 = [
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

const questionsIntermediaryLevel2 = [
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

const questionsIntermediaryLevel3 = [
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

// Quizz Hard
const questionsHardLevel1 = [
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

const questionsHardLevel2 = [
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

const questionsHardLevel3 = [
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

// Start Quizz

const startQuizEasy = (number) => {

    const elementQuestion = document.querySelector("#questions");

    const btnAnswer = document.querySelector("#btn-answers");

    const btnNext = document.querySelector("#btn-next");

    let positionCurrentQuestion = 0;

    let score = 0;

    let currentQuestionNumber = 1;

    let questions = [];

    switch (number) {

        case 1: 
            questions = questionsEazyLevel1;
            break;

        case 2: 
            questions = questionsEazyLevel2;
            break;

        case 3: 
            questions = questionsEazyLevel3;
            break;
    }

    const listOfPositionCurrentQuestion = [];

    const shuffle = (array) => {

        for (let i = array.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];

        }

        return array;

    }

    const randomNumber = () => Math.floor(Math.random() * questions.length);;

    const setRandomNumber = () => {

        let number = randomNumber();

        while (listOfPositionCurrentQuestion.includes(number)) {

            number = randomNumber();

        }

        return number;
    }
    const saveQuestion = (number) =>{

        if (!listOfPositionCurrentQuestion.includes(number)) {

            listOfPositionCurrentQuestion.push(number)

        }

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

        if (listOfPositionCurrentQuestion.length === questions.length) {

            elementQuestion.innerHTML = `Fim do quiz! 🎉<br>Você acertou ${score} de ${questions.length} perguntas.`;

            btnAnswer.innerHTML = "";

            btnNext.style.display = "none";

            return;

        } 

    }

    const showQuestion = () => {

        removeBtn();
        
        let currentQuestion = questions[positionCurrentQuestion];
        
        elementQuestion.innerHTML = `${currentQuestionNumber}. ${currentQuestion.question}`;

        currentQuestionNumber++;

        const shuffledAnswers = shuffle([...currentQuestion.answer]);

        shuffledAnswers.forEach((answer) => {

            const button = document.createElement("button");

            button.innerHTML = answer.text;

            button.dataset.id = answer.id;

            button.classList.add("btn");

            button.addEventListener("click", selectAnswer)
            
            btnAnswer.appendChild(button);


        });

    }

    btnNext.addEventListener("click", () => {

        if (listOfPositionCurrentQuestion.length < questions.length) {

            positionCurrentQuestion = setRandomNumber();

            saveQuestion(positionCurrentQuestion);

            showQuestion();

        } else {

            elementQuestion.innerHTML = `Fim do quiz! Você acertou ${score} de ${questions.length} perguntas`;

            btnAnswer.innerHTML = "";

            btnNext.style.display = "none";

        }

    });

    const startQuiz = () => {

        listOfPositionCurrentQuestion.length = 0;

        positionCurrentQuestion = setRandomNumber();

        saveQuestion(positionCurrentQuestion);
        
        score = 0;

        currentQuestionNumber = 1;

        btnNext.style.display = "inline-block";

        btnNext.innerHTML = "Próxima";

        showQuestion();

    }

    startQuiz();

}

const startQuizintermediary = (number) => {

    const elementQuestion = document.querySelector("#questions");

    const btnAnswer = document.querySelector("#btn-answers");

    const btnNext = document.querySelector("#btn-next");

    let positionCurrentQuestion = 0;

    let score = 0;

    let currentQuestionNumber = 1;

    let questions = [];

    switch (number) {

        case 1: 
            questions = questionsIntermediaryLevel1;
            break;

        case 2: 
            questions = questionsIntermediaryLevel2;
            break;

        case 3: 
            questions = questionsIntermediaryLevel3;
            break;
    }

    const listOfPositionCurrentQuestion = [];

    const shuffle = (array) => {

        for (let i = array.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];

        }

        return array;

    }

    const randomNumber = () => Math.floor(Math.random() * 5);

    const setRandomNumber = () => {

        let number = randomNumber();

        while (listOfPositionCurrentQuestion.includes(number)) {

            number = randomNumber();

        }

        return number;

    }

    const saveQuestion = (number) =>{

        if (!listOfPositionCurrentQuestion.includes(number)) {

            listOfPositionCurrentQuestion.push(number)

        }

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

        if (listOfPositionCurrentQuestion.length === questions.length) {

            elementQuestion.innerHTML = `Fim do quiz! 🎉<br>Você acertou ${score} de ${questions.length} perguntas.`;

            btnAnswer.innerHTML = "";

            btnNext.style.display = "none";

            return;

        } 

    }

    const showQuestion = () => {

        removeBtn();
        
        let currentQuestion = questions[positionCurrentQuestion];
        
        elementQuestion.innerHTML = `${currentQuestionNumber}. ${currentQuestion.question}`;

        currentQuestionNumber++;

        const shuffledAnswers = shuffle([...currentQuestion.answer]);

        shuffledAnswers.forEach((answer) => {

            const button = document.createElement("button");

            button.innerHTML = answer.text;

            button.dataset.id = answer.id;

            button.classList.add("btn");

            button.addEventListener("click", selectAnswer)
            
            btnAnswer.appendChild(button);


        });

    }

    btnNext.addEventListener("click", () => {

        if (listOfPositionCurrentQuestion.length < questions.length) {

            positionCurrentQuestion = setRandomNumber();

            saveQuestion(positionCurrentQuestion);

            showQuestion();

        } else {

            elementQuestion.innerHTML = `Fim do quiz! Você acertou ${score} de ${questions.length} perguntas`;

            btnAnswer.innerHTML = "";

            btnNext.style.display = "none";

        }

    });

    const startQuiz = () => {

        listOfPositionCurrentQuestion.length = 0;

        positionCurrentQuestion = setRandomNumber();

        saveQuestion(positionCurrentQuestion);
        
        score = 0;

        currentQuestionNumber = 1;

        btnNext.style.display = "inline-block";

        btnNext.innerHTML = "Próxima";

        showQuestion();

    }

    startQuiz();

}

const startQuizHard = (number) => {

    const elementQuestion = document.querySelector("#questions");

    const btnAnswer = document.querySelector("#btn-answers");

    const btnNext = document.querySelector("#btn-next");

    let positionCurrentQuestion = 0;

    let score = 0;

    let currentQuestionNumber = 1;

    let questions = [];

    switch (number) {

        case 1: 
            questions = questionsHardLevel1;
            break;

        case 2: 
            questions = questionsHardLevel2;
            break;

        case 3: 
            questions = questionsHardLevel3;
            break;
    }

    const listOfPositionCurrentQuestion = [];

    const shuffle = (array) => {

        for (let i = array.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];

        }

        return array;

    }

    const randomNumber = () => Math.floor(Math.random() * 5);

    const setRandomNumber = () => {

        let number = randomNumber();

        while (listOfPositionCurrentQuestion.includes(number)) {

            number = randomNumber();

        }

        return number;

    }

    const saveQuestion = (number) =>{

        if (!listOfPositionCurrentQuestion.includes(number)) {

            listOfPositionCurrentQuestion.push(number)

        }

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

        if (listOfPositionCurrentQuestion.length === questions.length) {

            elementQuestion.innerHTML = `Fim do quiz! 🎉<br>Você acertou ${score} de ${questions.length} perguntas.`;

            btnAnswer.innerHTML = "";

            btnNext.style.display = "none";

            return;

        } 

    }

    const showQuestion = () => {

        removeBtn();
        
        let currentQuestion = questions[positionCurrentQuestion];
        
        elementQuestion.innerHTML = `${currentQuestionNumber}. ${currentQuestion.question}`;

        currentQuestionNumber++;

        const shuffledAnswers = shuffle([...currentQuestion.answer]);

        shuffledAnswers.forEach((answer) => {

            const button = document.createElement("button");

            button.innerHTML = answer.text;

            button.dataset.id = answer.id;

            button.classList.add("btn");

            button.addEventListener("click", selectAnswer)
            
            btnAnswer.appendChild(button);


        });

    }

    btnNext.addEventListener("click", () => {

        if (listOfPositionCurrentQuestion.length < questions.length) {

            positionCurrentQuestion = setRandomNumber();

            saveQuestion(positionCurrentQuestion);

            showQuestion();

        } else {

            elementQuestion.innerHTML = `Fim do quiz! Você acertou ${score} de ${questions.length} perguntas`;

            btnAnswer.innerHTML = "";

            btnNext.style.display = "none";

        }

    });

    const startQuiz = () => {

        listOfPositionCurrentQuestion.length = 0;

        positionCurrentQuestion = setRandomNumber();

        saveQuestion(positionCurrentQuestion);
        
        score = 0;

        currentQuestionNumber = 1;

        btnNext.style.display = "inline-block";

        btnNext.innerHTML = "Próxima";

        showQuestion();

    }

    startQuiz();

}

window.addEventListener("DOMContentLoaded", () => {

    const quiz = document.querySelector(".quiz");

    const quizId = quiz.id;

    const quizParts = quizId.split("-");
    
    const quizDifficulty = quizParts[0];

    const quizLevel = parseInt(quizParts[1].replace("level", ""));

    switch (quizDifficulty) {

        case "easy":
            startQuizEasy(quizLevel);
            break;
        case "intermediary":
            startQuizintermediary(quizLevel);
            break;
        case "hard":
            startQuizHard(quizLevel);
            break;
    }

});