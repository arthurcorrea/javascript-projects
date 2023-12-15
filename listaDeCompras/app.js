// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery')
const submitButton = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearButton = document.querySelector('.clear-btn')

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********

// submit form
form.addEventListener('submit', addItem);

// clear items
clearButton.addEventListener('click', clearItems);

// load items
window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();

    const value = grocery.value;
    const id = new Date().getTime().toString();
    
    // verifica se não há nenhum item, para então adicioná-lo
    if(value && !editFlag) {
        // cria a listagem dos itens
        createListItem(id, value)

        // display alert
        displayAlert('item adicionado à lista', 'success');

        //show container
        container.classList.add('show-container');

        // add to local storage
        addToLocalStorage(id, value);

        // set back to default
        setBackToDefault()

    //* faz a verificação para editar o valor
    } else if(value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('Item alterado', 'success');

        // edit local storage
        editLocalStorage(editID, value);

        setBackToDefault();
    } else {
        displayAlert('Por favor, insira um valor', 'danger');
    }
}

//? display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1500);
}

//? edit function
function editItem(e) {
    const item = e.currentTarget.parentElement.parentElement;

    // set  edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;

    // set form value
    grocery.value = editElement.innerHTML;

    editFlag = true;
    editID = item.dataset.id;

    submitButton.textContent = 'Editar';
}

//? delete function
function deleteItem(e) {
    const item = e.currentTarget.parentElement.parentElement;
    const id = item.dataset.id;

    list.removeChild(item);

    if(list.children.length  === 0) {
        container.classList.remove("show-container");
    }

    displayAlert('Produto removido', 'success');
    setBackToDefault();

    // remove from local storage
    removeFromLocalStorage(id);

}

//? volta o input para o padrão
function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitButton.textContent = 'Adicionar';
}

//? limpa a lista
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    
    if(items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item);
        });
    }
    // tira o container de 'Limpar itens' que foi adicionado
    container.classList.remove("show-container");

    // aciona o alerta
    displayAlert("Lista apagada", "danger");

    // volta o input para o padrão
    setBackToDefault();

    localStorage.removeItem('list');
}


// ****** LOCAL STORAGE **********

//? adiciona ao armazenamento local
function addToLocalStorage(id, value) {
    // grocery receberá os mesmos valores que os parâmetros
    const grocery = { id, value };
    let items = getLocalStorage();

    items.push(grocery);

    localStorage.setItem('list', JSON.stringify(items));
    
}

//? edita o armazenamento local
function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function(item) {
        if(item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

//? remove do armazenamento local
function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function(item) {
        if(item.id !== id) {
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
}

//? retorna o armazenamento local
function getLocalStorage() {
    return localStorage.getItem('list') 
            ? JSON.parse(localStorage.getItem('list')) 
            : [];
}

// localStorage API

// setItem

// get Item

// removeItem

// save as strings

// ?localStorage.setItem('orange', JSON.stringify(['item', 'item2']));
// ?const oranges = JSON.parse(localStorage.getItem('orange'));
// ?localStorage.removeItem('orange');

// ****** SETUP ITEMS **********
function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0) {
        items.forEach(function(item) {
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container');
    }
}

function createListItem(id, value) {
    const element = document.createElement("article");

    // add class
    element.classList.add("grocery-item");

    //add id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML =  `<p class="title">${value}</p>
                        <div class="btn-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>`;

    // pegando os botões do elemento para editar/deletar
    const editButton = element.querySelector('.edit-btn');
    const deleteButton = element.querySelector('.delete-btn');

    // adicionando o eventListener aos botões
    editButton.addEventListener("click", editItem)
    deleteButton.addEventListener("click", deleteItem)

    // append child
    list.appendChild(element);
}