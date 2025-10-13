const nomeAluno = document.querySelector(".user-name");

nomeAluno.innerHTML = localStorage.getItem("user");

const buttonUser = document.querySelector("button.user");

buttonUser.addEventListener("click", () => {

    window.location = "pages/landing/home.html";

});