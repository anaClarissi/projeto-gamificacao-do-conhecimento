const btnEasy = document.querySelector("#btn-easy");

const btnIntermediary = document.querySelector("#btn-intermediary");

const btnHard = document.querySelector("#btn-hard");

const quizEasy = document.querySelector("#quiz-easy");

const quizIntermediary = document.querySelector("#quiz-intermediary");

const quizHard = document.querySelector("#quiz-hard");

btnEasy.addEventListener("click", () => {

    const descriptionEasy = document.querySelector("#description-easy");
    descriptionEasy.innerHTML = "";

    btnEasy.textContent = "voltar";

    quizEasy.style.display = "flex";

});

btnIntermediary.addEventListener("click", () => {

    const descriptionIntermediary = document.querySelector("#description-intermediary");
    descriptionIntermediary.innerHTML = "";

    btnIntermediary.textContent = "voltar";

    quizIntermediary.style.display = "flex";

});

btnHard.addEventListener("click", () => {

    const descriptionHard = document.querySelector("#description-hard");
    descriptionHard.innerHTML = "";

    btnHard.textContent = "voltar";

    quizHard.style.display = "flex";

});
