const btnEasy = document.querySelector("#btn-easy");
const btnIntermediary = document.querySelector("#btn-intermediary");
const btnHard = document.querySelector("#btn-hard");

const quizEasy = document.querySelector("#quiz-easy");
const quizIntermediary = document.querySelector("#quiz-intermediary");
const quizHard = document.querySelector("#quiz-hard");

const descriptionEasy = document.querySelector("#description-easy");
const descriptionIntermediary = document.querySelector("#description-intermediary");
const descriptionHard = document.querySelector("#description-hard");

const toggleQuiz = (button, description, quizContainer, textDescription) => {
    
    const isResponding = button.textContent.trim().toLowerCase() === "responder";

    if (isResponding) {

        description.style.opacity = "0";


        setTimeout(() => {

            description.innerHTML = "";

            quizContainer.style.display = "flex";

            quizContainer.style.opacity = "0";
            
            setTimeout(() => quizContainer.style.opacity = "1", 50);

        }, 200);
        
        button.textContent = "voltar";

    } else {

        quizContainer.style.opacity = "0";

        setTimeout(() => {

            quizContainer.style.display = "none";
            
            description.innerHTML = textDescription;

            description.style.opacity = "0"  ;

            setTimeout(() => description.style.opacity = "1", 50);

        }, 200);

        button.innerHTML = `responder <i class="fa-solid fa-right-to-bracket"></i>`;

    }

}

btnEasy.addEventListener("click", () => {

    toggleQuiz(

        btnEasy,
        descriptionEasy,
        quizEasy,
        "Este quiz aborda conceitos básicos de Informática, como dispositivos de entrada e saída, diferença entre hardware e software, extensões de arquivos, função da CPU e uso de navegadores para acessar a internet."

    );

});

btnIntermediary.addEventListener("click", () => {

    toggleQuiz(

        btnIntermediary,
        descriptionIntermediary,
        quizIntermediary,
        "Este quiz aborda noções intermediárias de Informática, como sistema operacional, memória RAM, planilhas eletrônicas, redes de computadores e conceitos da internet (URL)."

    );

});

btnHard.addEventListener("click", () => {

    toggleQuiz(

        btnHard,
        descriptionHard,
        quizHard,
        "Este quiz aborda temas avançados de Informática, como segurança de rede (firewall), virtualização, computação em nuvem, bancos de dados e automação com scripts."

    );

});
