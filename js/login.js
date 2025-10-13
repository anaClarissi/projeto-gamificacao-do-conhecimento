const usuarioInput = document.querySelector(".user-input");
const senhaInput = document.querySelector(".password-input");
const button = document.querySelector(".btn-login");
const form = document.querySelector(".card-login");

const validateInput = () => {

    if (usuarioInput.value.length > 2 && senhaInput.value.length > 2) {

        button.removeAttribute("disabled");

    } else {

        button.setAttribute("disabled", "");

    }

}

const handleSubmit = (event) => {

    event.preventDefault();

    localStorage.setItem("user", usuarioInput.value);

    localStorage.setItem("password", senhaInput.value);

    window.location = "pages/landing/home.html";

}

usuarioInput.addEventListener("input", validateInput);
senhaInput.addEventListener("input", validateInput)
form.addEventListener("submit", handleSubmit);