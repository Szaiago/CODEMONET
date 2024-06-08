function showCode(language) {
    const contents = document.querySelectorAll('.code-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(language).classList.add('active');
    const buttons = document.querySelectorAll('.code-buttons button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.code-buttons button[onclick="showCode('${language}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showCode('html');

    document.getElementById('copiar-html').addEventListener('click', () => copyText('html', 'copiar-html'));
    document.getElementById('copiar-css').addEventListener('click', () => copyText('css', 'copiar-css'));
    document.getElementById('copiar-js').addEventListener('click', () => copyText('js', 'copiar-js'));
});

function copyText(language, buttonId) {
    const container = document.getElementById(language);
    const textElements = container.querySelectorAll('h5, h6');
    let textToCopy = '';
    textElements.forEach(element => {
        textToCopy += element.textContent + '\n';
    });

    navigator.clipboard.writeText(textToCopy).then(() => {
        const button = document.getElementById(buttonId);
        const originalText = button.value;
        button.value = 'Copiado';
        button.classList.add('copied');
        setTimeout(() => {
            button.value = originalText;
            button.classList.remove('copied');
        }, 5000); 
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}