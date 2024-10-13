const motivationalQuotes = [
    "Acredite em você mesmo e todo o resto virá.",
    "Se você pode sonhar, você pode realizar.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Você é mais forte do que imagina.",
    "A única maneira de fazer um ótimo trabalho é amar o que você faz."
];

function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const resultadoElement = document.getElementById("resultado");

    resultadoElement.innerText = "I.A ANALISANDO PADRÃO...";
    resultadoElement.style.color = "#FFD700"; 

    setTimeout(() => {
        const resultado = num1 / num2 / num3 / num4;

        // Formata o resultado para mostrar apenas os três primeiros dígitos após o zero
        const resultadoFormatado = resultado.toString().split('.')[1].slice(0, 3);
        const rodadas = parseInt(resultadoFormatado, 10); // Converte os três primeiros dígitos em número

        const mensagem = `Aguarde ${rodadas} rodadas.`;

        // Verifica se os três primeiros dígitos formam um número par ou ímpar
        const corMensagem = rodadas % 2 === 0 ? "🔵" : "🔴";
        const finalMessage = `${mensagem} Entre na cor ${corMensagem}.`;

        resultadoElement.innerText = finalMessage; // Atualiza a mensagem com o resultado
        document.body.style.backgroundColor = "#2e2e2e"; 
    }, 5000);
}

function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if ((usuario === "menor2" && senha === "menor2") || (usuario === "vgdados" && senha === "vgdados")) {
        document.getElementById("login").classList.remove("active");
        document.getElementById("loading").classList.add("active");
        
        let index = 0;
        const loadingMessage = document.getElementById("loadingMessage");
        setInterval(() => {
            loadingMessage.innerText = motivationalQuotes[index];
            index = (index + 1) % motivationalQuotes.length;
        }, 3000);

        setTimeout(() => {
            document.getElementById("loading").classList.remove("active");
            document.getElementById("app").classList.add("active");
        }, 15000); // 15 segundos
    } else {
        alert("Usuário ou senha incorretos!");
    }
}
