// Setando variáveis

var btnAdd = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

// Inserindo no Armazenamento local
if (window.localStorage.getItem("toDos") == undefined) {
    let toDos = [];
    window.localStorage.setItem("toDos", JSON.stringify(toDos));
}

let save = window.localStorage.getItem("toDos");
let toDos = JSON.parse(save);

btnAdd.addEventListener('click', function () {

    if (inputField.value != "") {
        createItem(inputField.value);
        toDos.push(inputField.value);
        window.localStorage.setItem("toDos", JSON.stringify(toDos));
        inputField.value = "";
    }
    else if (!inputField.value || inputField.value.trim() == "") {
        alert("Insira alguma tarefa");
        return;
    }

});

function createItem(name) {

    let divElement = document.createElement('div');
    divElement.classList.add('item');

    // text

    let input = document.createElement('input');
    input.classList.add('paragrafoEstilo');
    input.setAttribute('style', 'color: grey');
    input.disabled = true;
    input.value = name;

    // Remove button

    let button = document.createElement('button');
    button.classList.add('remove');
    button.type = 'button';
    button.innerHTML = '| Excluir';
    button.addEventListener('click', function () {
        toDoContainer.removeChild(divElement);
        let index = toDos.indexOf(name);
        toDos.splice(index, 1);
        window.localStorage.setItem("toDos", JSON.stringify(toDos));
    });

    // Adiciona a div

    toDoContainer.appendChild(divElement);
    divElement.appendChild(input);
    divElement.appendChild(button);
}

for (let i = 0; i < toDos.length; i++) {
    createItem(toDos[i]);
}
