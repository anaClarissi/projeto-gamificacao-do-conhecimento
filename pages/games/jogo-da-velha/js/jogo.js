const jogadorAtualHTML = document.querySelector("#jogador_atual");
const buttons = document.querySelectorAll(".btn");

const posicoes = Array(9).fill(null);

let jogador = "X";

jogadorAtualHTML.textContent = jogador;

const preencherPosicao = (button) => {

    const index = button.value - 1;

    button.textContent = jogador;
    
    posicoes[index] = jogador;

    checarGanhador(jogador , posicoes)

    jogador = (jogador === "X") ? "O" : "X";

    jogadorAtualHTML.textContent = jogador;

}

const checarGanhador = (jogadorAtual, lista) => {

    const combinacoes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const [a, b,c ] of combinacoes) {

        if (lista[a] === jogadorAtual && lista[b] === jogadorAtual && lista[c] === jogadorAtual) {

            setInterval() {}

            alert(`Ganhador: ${jogadorAtual}!`)

            buttons.forEach((button) => button.disabled = true);

            return;

        }

    }

}

buttons.forEach((button) => {

    button.addEventListener('click', ({target}) => {

        preencherPosicao(target);

        target.disabled = true;

    });

});



