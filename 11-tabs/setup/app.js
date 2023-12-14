const about = document.querySelector(".about");
const buttons = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

/*
    * Comentário padrão
    ! Comentário em vermelho
    ? Comentário em azul
    @ comentário? 

*/

about.addEventListener('click', function(e){
    // console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if(id) {
        //? remover a classe 'active' dos outros botões
        buttons.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        //? esconder outros articles
        articles.forEach(function(article) {
            article.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active')
    }
});