function copyText() {
    var codeContent = document.querySelector(".code-content.active"); // Seleciona a div com a classe 'code-content' que está ativa
    var range = document.createRange();
    range.selectNode(codeContent);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    // Atualiza o valor do input para "Copiado"
    var copiarButton = document.getElementById("copiar");
    copiarButton.value = "Copiado";

    // Altera o estilo de fundo para verde
    copiarButton.style.backgroundColor = "lightgreen";
}