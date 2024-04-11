let textoDigitado = document.querySelector('.tarefa');
let botao = document.querySelector('.add');
let lista = document.querySelector('.lista');

botao.addEventListener('click', ()=>{
    if(textoDigitado.value){
        addTarefa(textoDigitado.value);
    }else{
        alert('Digite alguma tarefa');
    }
});

function addTarefa(tarefa){
    
    lista.innerHTML+=`<li>${tarefa}<button class="excluir">X</button></li>`;
    textoDigitado.value = "";   
}

lista.addEventListener('click', (event)=>{
    if(event.target.tagName=='BUTTON'){
        removeItens(event.target.parentNode)
    }
})

function removeItens(tarefa){
    tarefa.remove()
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        if(textoDigitado.value){
            addTarefa(textoDigitado.value);
        }else{
            alert('Digite alguma tarefa');
        }
        
    }
});










