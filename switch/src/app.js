
const buttonSwitchBackgroundColor = document.querySelectorAll('.btn-info')

buttonSwitchBackgroundColor.forEach(function(e){
    e.addEventListener('click', function() {
        //console.log(e.parentElement)
        const backgroundColor = e.parentElement
        backgroundColor.classList.toggle('bg-danger')
    })
})

const switchButtonColor = document.querySelectorAll('.btn-light');

switchButtonColor.forEach(function(e) {
    e.addEventListener('click', function(){
        e.classList.toggle('btn-danger')
    })
})
// function esperar(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function exemploAsync() {
//     console.log('Início');

//     await esperar(5000);

//     console.log('Fim');

// }

// exemploAsync();