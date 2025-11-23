// Banco de questões do Módulo 1 — Fundamentos de Suporte Técnico
const quizzes = {
    1: [
        {
            question: "Qual é o principal objetivo do suporte técnico?",
            options: [
                "Ajudar somente quando o computador quebra",
                "Restaurar o funcionamento do sistema e prevenir problemas",
                "Instalar programas para os usuários"
            ],
            answer: 1
        },
        {
            question: "O que caracteriza o atendimento Nível 1 (N1)?",
            options: [
                "Resolução de falhas complexas de hardware",
                "Análise profunda e correções avançadas",
                "Primeiro contato e solução de problemas simples"
            ],
            answer: 2
        },
        {
            question: "Na metodologia STAR, o que significa a letra T?",
            options: [
                "Tentar corrigir sem testar",
                "Testar e reproduzir o erro",
                "Transferir para outro técnico"
            ],
            answer: 1
        },
        {
            question: "Qual habilidade abaixo é considerada COMPORTAMENTAL?",
            options: [
                "Diagnóstico de rede",
                "Empatia com o usuário",
                "Instalação de sistemas"
            ],
            answer: 1
        },
        {
            question: "Qual ferramenta é comum no suporte técnico?",
            options: [
                "Pulseira antiestática",
                "Furadeira elétrica",
                "Caneta 3D"
            ],
            answer: 0
        },
        {
            question: "O que deve ser verificado primeiro em um computador lento?",
            options: [
                "Se a tela está limpa",
                "RAM, disco e programas que iniciam com o sistema",
                "Se o monitor é Full HD"
            ],
            answer: 1
        },
        {
            question: "Qual é um dos objetivos principais do suporte técnico?",
            options: [
                "Criar designs e artes para empresas",
                "Minimizar impactos no trabalho do usuário",
                "Desenvolver novos sistemas"
            ],
            answer: 1
        },
        {
            question: "O que faz um técnico N3?",
            options: [
                "Resolve problemas simples",
                "Cuida de bugs complexos e infraestrutura",
                "Atende apenas presencialmente"
            ],
            answer: 1
        },
        {
            question: "Qual item faz parte das habilidades técnicas?",
            options: [
                "Boa comunicação",
                "Organização",
                "Conhecimento de hardware"
            ],
            answer: 2
        },
        {
            question: "O que fazer quando um aplicativo está travando?",
            options: [
                "Aumentar o brilho da tela",
                "Reinstalar, atualizar ou limpar cache",
                "Mudar o papel de parede"
            ],
            answer: 1
        }
    ]
};


// ----------- GERADOR DO QUIZ -----------
$(document).ready(function () {
    const moduleId = 1; 
    const questions = quizzes[moduleId];

    const quizContainer = $("#quiz");

    // Renderizar perguntas
    questions.forEach((q, index) => {
        let questionHTML = `
            <div class="quiz-question">
                <p><strong>${index + 1}. ${q.question}</strong></p>
        `;

        q.options.forEach((opt, i) => {
            questionHTML += `
                <label class="quiz-option">
                    <input type="radio" name="q${index}" value="${i}">
                    ${opt}
                </label>
            `;
        });

        questionHTML += `</div>`;
        quizContainer.append(questionHTML);
    });

    // Botão enviar
    $("#submitBtn").click(function () {
        let score = 0;

        questions.forEach((q, index) => {
            const selected = $(`input[name="q${index}"]:checked`).val();
            if (parseInt(selected) === q.answer) {
                score++;
            }
        });

        $("#scoreDisplay").html(`<h3>Você acertou ${score} de ${questions.length} questões!</h3>`);

        $("#finalFeedback").show().html(
            score >= 7
                ? "<p style='color:green'><b>Ótimo trabalho!</b> Você entendeu muito bem o módulo!</p>"
                : "<p style='color:red'><b>Continue praticando!</b> Tente revisar o conteúdo.</p>"
        );
    });

    // Botão reset
    $("#resetBtn").click(function () {
        $("input[type=radio]").prop("checked", false);
        $("#scoreDisplay").html("");
        $("#finalFeedback").hide();
    });
});
