function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const x = randomInt(1, 5)
console.log(x);





//? ========= ROW 1 - COL 1 =========
const buttonSwitchBackgroundColor = document.querySelectorAll('.btn-info')

buttonSwitchBackgroundColor.forEach(function(e){
    e.addEventListener('click', function() {
        //console.log(e.parentElement)
        const backgroundColor = e.parentElement
        backgroundColor.classList.toggle('bg-danger')
    })
})
// ? ================================


//? ========= ROW 1 - COL 2 =========
const switchButtonColor = document.querySelector('.btn-light');

switchButtonColor.addEventListener('click', function(){
    switchButtonColor.classList.toggle('btn-light')

    console.log(switchButtonColor);
})
    
    

//? ================================


//? ========= ROW 1 - COL 3 =========
const buttonRow1col3 = document.getElementById('row1col3');

buttonRow1col3.addEventListener('click', switchColorText);

function switchColorText(e) {
    e.preventDefault();

    let paragraph = buttonRow1col3.previousElementSibling;

    buttonRow1col3.classList.toggle('switchColorText')
    paragraph.classList.toggle('switchColorText')
}
//? ================================

// function esperar(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function exemploAsync() {
//     console.log('Início');

//     await esperar(5000);

//     console.log('Fim');

// }

// exemploAsync();