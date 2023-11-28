var taskList = document.getElementById('taskList');
var inputList = document.getElementById('inputList');
var submitButton = document.getElementById('submitButton');
var filter = document.getElementById('filter');
var clearButton = document.getElementById('clearButton');

function addTask(){
    if (inputList.value == '') { return; }

    let li = document.createElement('div');
    li.classList.add('pending', 'task');
 
    let finBtn = document.createElement('button');
    finBtn.innerText = 'Concluir';
    
    let inp = document.createElement('input');
    inp.type = "text";
    inp.value = inputList.value;
    inp.readOnly = true;

    let edtBtn = document.createElement('button');
    edtBtn.innerText = 'Editar';

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Remover'

    finBtn.onclick = function(){
        li.removeChild(finBtn);
        li.removeChild(edtBtn);
        li.classList.remove('pending');
        li.classList.add('done');
    }

    edtBtn.onclick = function(){
        finBtn.disabled = !finBtn.disabled;
        delBtn.disabled = !delBtn.disabled;
        inp.readOnly = !inp.readOnly;
        edtBtn.innerText = (edtBtn.innerText == 'Editar') ? 'Salvar' : 'Editar';
    }

    delBtn.onclick = function(){
        taskList.removeChild(li);
    }
    
    li.appendChild(finBtn);
    li.appendChild(inp);
    li.appendChild(edtBtn);
    li.appendChild(delBtn);

    taskList.appendChild(li);

    if (filter.value == 'done') { filter.value = 'pending'; }
    filterList();

    inputList.value = '';
}

function filterList(){
    if (filter.value == 'all') {
        [...taskList.childNodes].forEach(task => task.hidden = false);
    } else {
        [...taskList.childNodes].forEach(task => task.hidden = !task.classList.contains(filter.value));
    }
}

function clearDoneTasks(){
    [...taskList.childNodes].filter(task => task.classList.contains('done')).
        forEach(task => taskList.removeChild(task));
}

function onHoverTask(){
    
}