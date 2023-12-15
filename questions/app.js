//using selectors inside the element

const questions = document.querySelectorAll('.question');

// o parâmetro 'question' referencia o article completo
questions.forEach(function(question) {
    // button = referencia apenas o botão
    const button = question.querySelector('.question-btn');
    // monitora o click em um botão
    button.addEventListener('click', function() {
        // faz outro loop nos botões para verificar quais já tem a classe 'show-text'
        questions.forEach(function(btn){
            // verifica se o 'btn' não é igual ao 'question', ou seja, se já possui a classe 'show-text'
            // se tiver, remove a classe do article que o tiver, fazendo com que a resposta seja escondida
            if(btn !== question) {
                btn.classList.remove('show-text');
            }
        });

        // adiciona a classe 'show-text' ao elemento que não tem essa classe
        question.classList.toggle('show-text');
    });

});
