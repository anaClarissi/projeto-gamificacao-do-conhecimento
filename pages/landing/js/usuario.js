const nomeAluno = document.querySelector(".user-name");

nomeAluno.innerHTML = localStorage.getItem("user");

/*$(document).ready(() => {

    $(".user").on("click", () => {

        $('#user-menu').toggleClass('active');

    })

});*/